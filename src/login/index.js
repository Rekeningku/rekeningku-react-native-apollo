import React, { Component } from 'react';
import {
    View, Text, Switch, Button
} from 'react-native'
import {
    Container, Content, Thumbnail,
    Header, Body, Title, Icon,
    Left, Right, List, ListItem, Input, Item
} from 'native-base'
import { connect } from 'react-redux'
import { compose, graphql, ApolloConsumer, Mutation, Query } from 'react-apollo';
import { withState, withHandlers, lifecycle, branch, pure } from 'recompose';

export default LoginScreen = ({OnLoginClicked, setEmail, setPassword}) => {
    return(
        <View>
            <Item>
                <Input onChangeText={setEmail}></Input>
            </Item>
            <Item>
                <Input onChangeText={setPassword}></Input>
            </Item>
            <Button title='Login' onPress={()=>OnLoginClicked('defr')}></Button>
        </View>
    )
}