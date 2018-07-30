import React, { Component } from 'react'
import {
    Text, Image, TouchableOpacity, StyleSheet, View, Alert
} from 'react-native'

import {
    Container, Content, Thumbnail,
    Header, Body, Title, Icon, Button,
    Left, Right, List, ListItem, Input,
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Column as Col, Row} from 'react-native-flexbox-grid'
import Form from './components/form'

export default LoginScreen = (props) => {
    handleSubmit = (values) => {
        Alert.alert(JSON.stringify(values));
      }
    return(
        <Container style={{ backgroundColor :  'white' }}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
                <Content style={{ padding : 30, paddingTop: 100 }}>
                    <Image square
                        style={{alignSelf : 'center', marginBottom: 10, width: 211, height: 50 }}
                        source={require('../static/images/logo.png')}
                    />
                    <View>
                        <Form {...this.props} onSubmit={this.handleSubmit} />
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
}
