import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import LoginScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { REGISTER_SCREEN } from '../register/container';
export const LOGIN_SCREEN = {
    screen: 'login.Index',
    title: false,
    animated: true,
    animationType: 'none',
    navigatorStyle: {
        tabBarHidden: true,
    },
}


const enhance = compose(
    withState('interactionsStatus','setInteractions',false),
    connect(),
    withHandlers({
        goToRegister: props=>()=>{
            props.navigator.resetTo(REGISTER_SCREEN)
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