import React, { Component } from 'react'
import {
    Text, Image, TouchableOpacity, StyleSheet, View, Alert
} from 'react-native'

import {
    Container, Content, Thumbnail,
    Header, Body, Title, Icon, Button,
    Left, Right, List, ListItem, Input, Toast, Spinner,
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import Form from './components/form'
import { Mutation } from 'react-apollo';
import { LOGIN } from '../graphql/api/mutations/login';
import { client } from '../apollo-client';
import { AUTH } from '../graphql/client/queries/auth';
import { CREATE_AUTH } from '../graphql/client/mutations/create-auth';

export default LoginScreen = (props) => {
    return (
        <Mutation mutation={LOGIN} update={(store)=>{}} >
            {(login, {data, loading, error})=>{
                return (
                    <Container style={{ backgroundColor :  'white' }}>
                        {/* <Loader error={error} loading={loading}></Loader> */}
                        {error?(<Text>Error</Text>):<Text>Not Error</Text>}                        
                        <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
                            <Content style={{ padding : 30, paddingTop: 100 }}>
                                <Image square
                                    style={{alignSelf : 'center', marginBottom: 10, width: 211, height: 50 }}
                                    source={require('../static/images/logo.png')}
                                />
                                {loading? <Spinner></Spinner> : null}
                                {/* <Text>{error ? (error.graphQLErrors[0].message):('')}</Text> */}
                                <Text>{JSON.stringify(data)}</Text>
                                {/* <Text>{JSON.stringify(props)}</Text> */}
                                <View>
                                    <Form onSubmit={()=>{
                                        const {email,password} = props.form.login.values
                                        login({variables:{email: email, password: password},update:(store,data)=>{
                                            // console.log(store)
                                            // console.log(data)
                                            const {authType, error, hash, token, status} = data.data.login
                                            // console.log(hash)
                                            // console.log(token)
                                            // console.log(authType)
                                            client.mutate({mutation: CREATE_AUTH, variables:{
                                                token,
                                                hash,
                                                authType,
                                                status
                                            }})
                                            // client.writeData({
                                            //     data:{
                                            //         auth:{
                                            //             status:true,
                                            //             token: token,
                                            //             authType: authType,
                                            //             __typename: 'auth',
                                            //         }
                                            //     }
                                            // })
                                        }})
                                    }}/>  
                                </View>
                                <Row>
                                    <Col sm={12}>
                                        <TouchableOpacity onPress={props.goToRegister}>
                                            <Text style={{ color : '#2B79C9', textAlign: 'center' }}>
                                                <Text style={{ color : '#444'}}>Belum punya akun? </Text>
                                                <Text> Daftar Disini</Text>
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            marginTop: 20
                                        }}>
                                            <Text style={{ color : '#2B79C9', textAlign: 'center' }}>
                                                Lupa Password
                                            </Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                            </Content>
                        </KeyboardAwareScrollView>
                    </Container>
                )
            }}
        </Mutation>
    )
}