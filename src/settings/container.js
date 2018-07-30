import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import SettingsScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
export const SETTINGS_SCREEN = {
    screen: 'settings.Index',
    title: 'Settings',
}


const enhance = compose(
    connect(),
    withState('bonusStatus','setBonusStatus',true),
    withState('interactionsStatus','setInteractions',false),
    withHandlers({
        logout: props => (message) => {
            console.log('on press' + props)
        },
        onChangeBonusStatus: ({setBonusStatus}) => (status) => {
            setBonusStatus(status)
        }
    }),
    lifecycle({
        componentDidMount(){
            InteractionManager.runAfterInteractions(()=>{
                this.props.setInteractions(true)
            })
        }
    }),
    branch(({interactionsStatus})=>interactionsStatus,renderComponent(SettingsScreen),renderComponent(renderNothing())),
    pure
)
export default enhance(SettingsScreen)