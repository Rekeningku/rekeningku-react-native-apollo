/* eslint-disable import/no-named-as-default */
import { Navigation } from 'react-native-navigation'

import Home, { HOME_SCREEN } from './Home'
import NestedScreenA, { NESTED_SCREEN_A } from './NestedScreenA'
import NestedScreenB, { NESTED_SCREEN_B } from './NestedScreenB'
import apolloAndReduxProviderHOC from '../apollo-hoc'
import { client } from '../apollo-client'
import { MARKETS_SCREEN, MarketsScreen } from '../markets/screens';
import MarketsDetailScreen, { MARKETS_DETAIL_SCREEN } from '../markets/screens/detail';
import SettingScreen,{ SETTINGS_SCREEN } from '../settings/screens';

const registerComponent = redux => (name, component) => {
  Navigation.registerComponent(
    name, 
    () => apolloAndReduxProviderHOC(component, redux.store, client), 
    redux.store, 
    redux.Provider
  ) 
  // Navigation.registerComponent(
  //   name, 
  //   () => component, 
  //   redux.store, 
  //   redux.Provider
  // ) 
  
}  

export function registerScreens(redux) {
  registerComponent(redux)(HOME_SCREEN.screen, Home)
  registerComponent(redux)(NESTED_SCREEN_A.screen, NestedScreenA)
  registerComponent(redux)(NESTED_SCREEN_B.screen, NestedScreenB)
  registerComponent(redux)(MARKETS_SCREEN.screen, MarketsScreen)
  registerComponent(redux)(MARKETS_DETAIL_SCREEN.screen, MarketsDetailScreen)
  registerComponent(redux)(SETTINGS_SCREEN.screen, SettingScreen)
}
