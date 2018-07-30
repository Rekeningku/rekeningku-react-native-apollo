/* eslint-disable import/no-named-as-default */
import { Navigation } from 'react-native-navigation'

import apolloAndReduxProviderHOC from './apollo-hoc'
import { client } from './apollo-client'
import SettingsScreen, { SETTINGS_SCREEN } from './settings/container';
import MarketsScreen, { MARKETS_SCREEN } from './markets/container';
import LoginScreen, { LOGIN_SCREEN } from './login/container';
import RegisterScreen, { REGISTER_SCREEN } from './register/container';
import WalletScreen, { WALLETS_SCREEN } from './wallets/container';
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
  registerComponent(redux)(LOGIN_SCREEN.screen, LoginScreen)
  registerComponent(redux)(REGISTER_SCREEN.screen, RegisterScreen)
  registerComponent(redux)(WALLETS_SCREEN.screen, WalletScreen)
}
