import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import {
  Container, H1, P, Button,
} from '../../components'
import { NESTED_SCREEN_A } from '../NestedScreenA'


export const HOME_SCREEN = {
  screen: 'app.Home',
  title: 'Home',
}

export const HomeScreen = ({ handleOpenScreenA }) => (
  <Container>
    <H1>
      Home Screen
    </H1>
    <P>
      This is an example screen that is not connected to redux-store.
    </P>
    <P>
      With Wix React Native Navigation it is easy to make native transitions between screens.
    </P>
    <Button onPress={handleOpenScreenA}>
      Open Nested Screen A
    </Button>
  </Container>
)

HomeScreen.propTypes = {
  navigator: PropTypes.shape({ // eslint-disable-line
    push: PropTypes.func,
  }),
  handleOpenScreenA: PropTypes.func,
}

const enhance = compose(
  withHandlers({
    handleOpenScreenA: ({ navigator }) => () => navigator.push(NESTED_SCREEN_A),
  }),
)

export default enhance(HomeScreen)
