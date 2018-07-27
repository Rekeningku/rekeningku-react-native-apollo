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
import styles from '../../commons/style'
import { compose, graphql, ApolloConsumer, Mutation, Query } from 'react-apollo';
import { withState, withHandlers, lifecycle, branch, pure } from 'recompose';
import gql from 'graphql-tag';
import { client } from '../../apollo-client';



export const SETTINGS_SCREEN = {
    screen: 'markets.Index',
    title: 'Markets',
}

  
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

const SettingsScreen = ({logout, bonusStatus, onChangeBonusStatus,loading,data}) => {
    if(loading){
        return(
            <View>
                <Button onPress={logout('okay')} title={'testing'}></Button>
            </View>
        )
    }
    return(
        <Query query={BONUS_STATUS_QUERY}>
            {({ loading, error, data, refetch }) => {
                if(loading){
                    return(<Text>Loading</Text>)
                }
                return(
                    <Mutation mutation={UPDATE_BONUS_STATUS_QUERY}>
                        {(updateBonusStatus,{newData})=>(
                            <Switch
                                value={data.BonusStatus.status}
                                onValueChange={(status)=> updateBonusStatus({variables: {status},
                                    optimisticResponse:{
                                        updateBonusStatus: {
                                            __typename: 'BonusStatus',
                                            status,
                                            id: Math.round(Math.random() * -1000000)
                                        }
                                    },update: (proxy, {data: { BonusStatus }})=>{
                                        const data = proxy.readQuery({query: BONUS_STATUS_QUERY})
                                        console.log('=====')
                                        console.log(data)
                                        data.BonusStatus.status = status
                                        proxy.writeQuery({query: BONUS_STATUS_QUERY, data})
                                    }}
                                )}
                                thumbTintColor='#2B79C9'
                                onTintColor='#e7f2ff'
                                tintColor='#555'
                                style={[styles.switch]}   
                            />
                        )}    
                    </Mutation>
                )
            }}
        </Query>
        
    )
}


const BONUS_STATUS_QUERY = gql`{
    BonusStatus(id: "cjk3nq7s504ts0171ponrcego"){
        status,id
    }
}`

const UPDATE_BONUS_STATUS_QUERY = gql`
    mutation updateBonusStatus($status: Boolean!){
        updateBonusStatus(id: "cjk3nq7s504ts0171ponrcego", status:$status){
            id,status
        }
    }
`


const enhance = compose(
    connect(),
    withState('bonusStatus','setBonusStatus',true),
    withHandlers({
        logout: props => (message) => {
            console.log('on press' + props)
        },
        onChangeBonusStatus: ({setBonusStatus}) => (status) => {
            setBonusStatus(status)
        }
    }),
    lifecycle({
        componentDidMount(){
            client.query({query: BONUS_STATUS_QUERY}).then(({data:{BonusStatus:{status}}})=>{
                console.log('component did mount')
                console.log(status)
                this.props.setBonusStatus(status)
            })
        }
    }),pure
)
export default enhance(SettingsScreen)