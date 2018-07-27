import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import hoistNonReactStatic from 'hoist-non-react-statics'

export default apolloAndReduxProviderHOC = (WrappedComponent, store, client) => {
  class Enhance extends React.Component {
    render () {
      return (
        <Provider store={store}>
          <ApolloProvider client={client}>
            <WrappedComponent store={store} client={client} {...this.props} />
          </ApolloProvider>
        </Provider>

      )
    }
  }
  //Copies the static methods over to enhanced component
  hoistNonReactStatic(Enhance, WrappedComponent)
  return Enhance
}