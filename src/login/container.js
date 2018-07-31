import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import LoginScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { REGISTER_SCREEN } from '../register/container';
export const LOGIN_SCREEN = {
    screen: 'login.Index',
    animated: true,
    animationType: 'fade',
    navigatorStyle: {
        tabBarHidden: true,
        // navBarHidden: true, 
        navBarBackgroundColor: '#fff',
        navBarButtonColor: '#2b79c9',
        drawUnderNavBar:true,
        navBarTransparent: true,
    },
}


const enhance = compose(
    withState('interactionsStatus','setInteractions',false),
    connect(),
    withHandlers({
        goToRegister: props=>()=>{
            props.navigator.push(REGISTER_SCREEN)
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