import React, { Component } from 'react';
import {
    View, Text, Switch, Button
} from 'react-native'
import {
    Container, Content, Thumbnail,
    Header, Body, Title, Icon,
    Left, Right, List, ListItem
} from 'native-base'
import { connect } from 'react-redux'
import { compose, graphql, ApolloConsumer, Mutation, Query } from 'react-apollo';
import { withState, withHandlers, lifecycle, branch, pure } from 'recompose';
import { LOGIN_SCREEN } from '../login/container';

export default Wallets = (props) => {
    return(
        <View>
            <Text onPress={
                () => props.navigator.showModal(LOGIN_SCREEN)
            }>Wallets</Text>
        </View>
    )
}
