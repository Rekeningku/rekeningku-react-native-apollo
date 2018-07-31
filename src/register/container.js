import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import RegisterScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { LOGIN_SCREEN } from '../login/container';

export const REGISTER_SCREEN = {
    screen: 'register.Index',
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
      goToLogin: props=>()=>{
        props.navigator.resetTo(LOGIN_SCREEN)
      }
    }),
    lifecycle({
        componentDidMount(){
            InteractionManager.runAfterInteractions(()=>{
                this.props.setInteractions(true)
            })
        }
    }),
    branch(({interactionsStatus})=>interactionsStatus,renderComponent(RegisterScreen),renderComponent(renderNothing())),
    pure
)
export default enhance(RegisterScreen)