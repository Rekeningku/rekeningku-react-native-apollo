/* eslint-disable import/no-named-as-default */
import { Navigation } from 'react-native-navigation'

import apolloAndReduxProviderHOC from './apollo-hoc'
import { client } from './apollo-client'
import SettingsScreen,{ SETTINGS_SCREEN } from './settings/container';
import MarketsScreen,{ MARKETS_SCREEN } from './markets/container';
const registerComponent = redux => (name, component) => {
  Navigation.registerComponent(
    name, 
    () => apolloAndReduxProviderHOC(component, redux.store, client), 
    redux.store, 
    redux.Provider
  )
}  

export function registerScreens(redux) {
  registerComponent(redux)(SETTINGS_SCREEN.screen, SettingsScreen)
  registerComponent(redux)(MARKETS_SCREEN.screen, MarketsScreen)
}