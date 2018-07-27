import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { View, Text, FlatList } from 'react-native'
import gql from 'graphql-tag';
import styles from '../../commons/style'
import { format, formatWithComma } from '../../commons/numberCurrency';
import { Row,Column as Col } from 'react-native-flexbox-grid'
import RF from 'react-native-responsive-fontsize'

const renderBuyOnLoading = () => {
    let items = []
    for(i = 0; i < 10;i++){
        items.push(
            <Row key={i} size={2}>
                <Col sm={1}>
                    <Text style={[style.MtableContent]}>--</Text>
                </Col>
                <Col sm={1}>
                <Text style={[style.MtableContent, {color : '#00c087',textAlign: 'right'}]}>--</Text>
                </Col>
            </Row>
        )
    }
    return items
}

const renderSellOnLoading = () => {
    let items = []
    for(i = 0; i < 10;i++){
        items.push(
            <Row key={i} size={2}>
                <Col sm={1}>
                    <Text style={[style.MtableContent, {color: '#e50370'}]}>--</Text>
                </Col>
                <Col sm={1}>
                <Text style={[style.MtableContent, {textAlign: 'right'}]}>--</Text>
                </Col>
            </Row>
        )
    }
    return items
}

const render = (data,loading) =>{
    return (
    <View style={{flex:1,padding:5, backgroundColor: 'transparent'}}>
    <Row size={4}>
        <Col sm={2} style={style.Mtable}>
            <Text>Bid</Text>
        </Col>
        <Col sm={2} style={style.Mtable}>
            <Text>Ask</Text>
        </Col>
    </Row>
    <Row size={2} style={[style.MtableRows]}>
        <Col sm={1}>
            <View>
                {loading ? (
                    renderBuyOnLoading()
                ):(

                <FlatList data={data.buy} renderItem={({item,index})=>(
                        <Row key={index} size={2} style={[style.MtableRows]}>
                            <Col sm={1}>
                                <Text style={[style.MtableContent]}>{format(item.amount)}</Text>
                            </Col>
                            <Col sm={1}>
                            <Text style={[style.MtableContent, {color : '#00c087',textAlign: 'right'}]}>{item.dcr !== undefined && (formatWithComma(item.dcr.toFixed(5)))}</Text>
                            </Col>
                        </Row>
                    )
                }/>
                )}
            </View>
        </Col>
        <Col sm={1}>
            <View>
            {loading ? (
                renderSellOnLoading()
            ):(
            <FlatList data={data.sell} renderItem={({item,index})=>(
                <Row key={index} size={2} style={[style.MtableRows]}>
                    <Col sm={1}>
                        <Text style={[style.MtableContent, {color: '#e50370'}]}>{item.dcr !== undefined && (formatWithComma(item.dcr.toFixed(5)))}</Text>
                    </Col>
                    <Col sm={1}>
                    <Text style={[style.MtableContent, {textAlign: 'right'}]}>{format(item.amount)}</Text>
                    </Col>
                </Row>
            )}>
            </FlatList>
            )}
            </View>
        </Col>
    </Row>
    </View>
    )
}

export const DetailOrderBook = ({coinId}) => (
    <Query query={ORDER_BOOK_QUERY} variables={{coinId}}>
        {({ loading, error, data, refetch }) => {
            if(error){
                return(
                    <Text>{JSON.stringify(error)}</Text>
                )
            }
            return(
                render(data.orderbook,loading)
            )

            {/* return (render(data.orderbook,loading)) */}
        }}

    </Query>
)

const enhance = compose(
    connect(),
)

const ORDER_BOOK_QUERY = gql`
    query orderbook($coinId: Int!){
    orderbook(id: $coinId){
        buy{
            idr,
            dcr,
            amount
        },
        sell{
            idr,
            dcr,
            amount
        }
    }
}`

const style = {
    tab_header:{
      backgroundColor:'white'
    },
    tab_header_active:{
      backgroundColor:'white'
    },
    text_header:{
      color:'black',
      fontSize:12
    },
    Mtable: {borderBottomColor:'#e7e7e7',borderBottomWidth:1, padding: 10,},
    MtableRows:{padding: 5},
    MtableContent:{fontWeight: 'bold', padding : 3, fontSize: RF(1.7)}
  }


export default enhance(DetailOrderBook)
