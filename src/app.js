import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import store from './store'
import { registerScreens } from './routelist';


registerScreens({ Provider, store })
startTabBasedApp()
