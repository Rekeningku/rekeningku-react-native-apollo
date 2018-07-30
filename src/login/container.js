import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import LoginScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { MARKETS_SCREEN } from '../markets/container';

export const LOGIN_SCREEN = {
    screen: 'login.Index',
    title: 'Login',
}


const enhance = compose(
    withState('interactionsStatus','setInteractions',false),
    withState('email','setEmail',null),
    withState('password','setPassword',null),
    connect(),
    withHandlers({
        OnLoginClicked: (props) => (email,password) => {
            props.navigator.push(MARKETS_SCREEN)
            // graphql(LOGIN,{options:{variables:{email: email,password: password}}})
        }
    }),
    lifecycle({
        componentDidMount(){
            InteractionManager.runAfterInteractions(()=>{
                this.props.setInteractions(true)
            })
        }
    }),
    branch(({interactionsStatus})=>interactionsStatus,renderComponent(LoginScreen),renderComponent(renderNothing())),
    pure
)
export default enhance(LoginScreen)