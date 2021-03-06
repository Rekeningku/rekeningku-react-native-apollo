import { Navigation } from 'react-native-navigation'
import homeIcoSrc from './static/images/home.png'
import CounterIcoSrc from './static/images/counter.png'
import { THEME } from './config';
import { SETTINGS_SCREEN } from './settings/container';
import { MARKETS_SCREEN } from './markets/container';
import { LOGIN_SCREEN } from './login/container';
import { REGISTER_SCREEN } from './register/container';
import { WALLETS_SCREEN } from './wallets/container';

const tabs = [
  {
    label: 'Settings',
    icon: homeIcoSrc,
    ...SETTINGS_SCREEN
  },
  {
    label: 'Markets',
    icon: homeIcoSrc,
    ...MARKETS_SCREEN
  },
  {
    label: 'Wallets',
    icon: homeIcoSrc,
    ...WALLETS_SCREEN
  },
  // {
  //   label: 'Register',
  //   icon: homeIcoSrc,
  //   tabBarHidden: true,
  //   navigatorStyle: {
  //     tabBarHidden: true,
  //   },
  //   ...REGISTER_SCREEN,
  // }
]

export const startTabBasedApp = () => Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
  tabsStyle: {
    tabBarShowLabels: 'hidden',
    tabBarButtonColor: THEME.textOnPrimary,
    tabBarBackgroundColor: THEME.black,
    navBarButtonColor: THEME.black,
    tabBarSelectedButtonColor: THEME.primary,
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    topBarElevationShadowEnabled: false,
    tabBarButtonColor: THEME.black,
    tabBarBackgroundColor: THEME.textOnPrimary,
    navBarButtonColor: THEME.black,
    tabBarSelectedButtonColor: THEME.primary,
  },
})
