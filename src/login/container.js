import { compose, withState, withHandlers, lifecycle, pure, branch, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import LoginScreen from './index';
import { client } from '../apollo-client';
import { InteractionManager, Text } from 'react-native'
import React from 'react';
import { REGISTER_SCREEN } from '../register/container';
import { graphql } from 'react-apollo';
import { Toast } from 'native-base';
import { LOGIN } from '../graphql/client/mutations/create-auth';
import { AUTH } from '../graphql/client/queries/auth';

export const LOGIN_SCREEN = {
    screen: 'login.Index',
    animated: true,
    animationType: 'fade',
    navigatorStyle: {
        tabBarHidden: true,
        // navBarHidden: true, 
        navBarBackgroundColor: '#fff',
        navBarButtonColor: '#2b79c9',
        drawUnderNavBar:true,
        navBarTransparent: true,
    },
}

const mapStateToProps = (states) =>({
    form: states.form
})


const enhance = compose(
    withState('interactionsStatus','setInteractions',false),
    graphql(AUTH),
    connect(mapStateToProps),
    withHandlers({
        goToRegister: props=>()=>{
            props.navigator.resetTo(REGISTER_SCREEN)
        },
        showErrorLogin(errorMessage){
            Toast.show({
                text: errorMessage,
            buttonText: "OK",
                duration: 3000,
                type:'success',
            })
        }
        // onLoginClicked: ({form:{login:{values:{email,password}}}})=> ()=>{
        //     // console.log('asdasdasdas')
        //     client.mutate({mutation: LOGIN, variables:{email,password}})
        // }
    }),
    lifecycle({
        componentDidMount(){
            InteractionManager.runAfterInteractions(()=>{
                this.props.setInteractions(true)
            })
        },
        componentWillReceiveProps(nextProps){
            console.log(nextProps)
        }
    }),
    branch(({interactionsStatus})=>interactionsStatus,renderComponent(LoginScreen),renderComponent(renderNothing())),
    pure
)
export default enhance(LoginScreen)