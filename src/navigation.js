import { Navigation } from 'react-native-navigation'
import { HOME_SCREEN } from './screens/Home/index'
import { MARKETS_SCREEN } from './markets/screens/index'

import homeIcoSrc from './static/images/home.png'
import CounterIcoSrc from './static/images/counter.png'
import { THEME } from './config';
import { SETTINGS_SCREEN } from './settings/screens';

const tabs = [{
  label: 'Home',
  icon: homeIcoSrc,
  ...HOME_SCREEN,
}, {
  label: 'Markets',
  icon: CounterIcoSrc,
  ...MARKETS_SCREEN,
}, {
  label: 'Settings',
  icon: homeIcoSrc,
  ...SETTINGS_SCREEN
}
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
