import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import WalletsScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { graphql } from 'react-apollo';
import { AUTH } from '../graphql/client/queries/auth';
import LoginScreen from '../login/container';
import { LOGIN } from '../graphql/api/mutations/login';
import { RESET_AUTH } from '../graphql/client/mutations/reset-auth';
export const WALLETS_SCREEN = {
    screen: 'wallets.Index',
    title: 'Wallets',
}

const renderBasedAuth = branch(({data:{auth:{isLoggedIn}}})=>isLoggedIn, renderComponent(WalletsScreen), renderComponent(LoginScreen))

const enhance = compose(
    withState('interactionsStatus','setInteractions',false),
    connect(),
    graphql(AUTH),
    withHandlers({
        logout: props => () =>{
            client.mutate({mutation:RESET_AUTH})
        }
    }),
    lifecycle({
        componentDidMount(){
            console.log(this.props)
            InteractionManager.runAfterInteractions(()=>{
                this.props.setInteractions(true)
            })
        }
    }),
    branch(({interactionsStatus})=>interactionsStatus, renderBasedAuth, renderComponent(renderNothing()))
)
export default enhance(LoginScreen)
