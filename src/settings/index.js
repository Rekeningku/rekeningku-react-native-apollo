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
import { CHECK_BONUS } from '../graphql/api/queires/checkbonus';
import { CHANGE_BONUS } from '../graphql/api/mutations/changebonus';

const stringToRGB = (str) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#"+ "00000".substring(0, 6 - c.length) + c;
}

const renderOnLogout = (props) => {
    <View>
        <Text> on login</Text>
    </View>
}

const renderOnLogin = (props) => {
    <View>
        <Text> on logout</Text>
    </View>
}

export default SettingsScreen = ({logout, bonusStatus, onChangeBonusStatus,loading,data}) => {
    if(loading){
        return(
            <View>
                <Button onPress={logout('okay')} title={'testing'}></Button>
            </View>
        )
    }
    return(
        <Text>Setting</Text>
    )
}
