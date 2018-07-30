import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import WalletsScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { graphql } from 'react-apollo';
import { IS_AUTHENTICATED } from '../graphql/client/queries/auth';
import LoginScreen from '../login/container';
import { LOGIN } from '../graphql/api/mutations/login';
export const WALLETS_SCREEN = {
    screen: 'wallets.Index',
    title: 'Wallets',
}

const renderBasedAuth = branch(({data:{isAuthenticated:{status}}})=>status,renderComponent(LoginScreen),renderComponent(WalletsScreen))

const enhance = compose(
    withState('interactionsStatus','setInteractions',false),
    connect(),
    graphql(IS_AUTHENTICATED),
    withHandlers({
    }),
    lifecycle({
        componentDidMount(){
            console.log(this.props)
            InteractionManager.runAfterInteractions(()=>{
                this.props.setInteractions(true)
            })
        }
    }),
    branch(({interactionsStatus})=>interactionsStatus,renderBasedAuth,renderComponent(renderNothing())),

    pure
)
export default enhance(LoginScreen)
