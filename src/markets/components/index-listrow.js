import React, { Component } from 'react';
import { 
    View, Text, TouchableNativeFeedback, TouchableOpacity, Animated, TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import {Column as Col,Row} from 'react-native-flexbox-grid'
import styles from '../../commons/style' 
import { format } from '../../commons/numberCurrency';
import { MARKETS_DETAIL_SCREEN, MarketsDetailScreen } from '../screens/detail';
// import { orderResetAnimationUpdate, marketsAllPrices } from '../../markets/actions';
// import { tradesChangeMarket } from '../action';
import { PropTypes } from 'prop-types';
import { compose, withHandlers } from 'recompose'

var _ = require('lodash')

const interpolatedColor = '#FFF'

const ListRow = (props) =>(
    <TouchableOpacity key={props.index} onPress={()=>props.handleOpenDetail(props.item)}>
        <Animated.View style={{backgroundColor:interpolatedColor}}>
            <Row 
            style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: '#DDD',
                borderBottomWidth: 1,
            }}
            size={3}>
                <Col sm={1}>
                    <Row size={3}> 
                        <Text style={[styles.text_content,{color:'#0e0e0e'}]}>{props.item.accountCode || ''}</Text>
                        <Text style={[styles.text_target_pair]}> / IDR</Text>
                    </Row>
                    <Text style={[styles.text_target_pair]}>{format(props.item.volumeRp || '')}</Text>
                    
                </Col>
                <Col sm={1}>
                    <Text style={[styles.text_content,]}>{format(props.item.lastDone || '')}</Text>
                    {/* <Text style={[styles.text_target_pair,]}>{format(this.props.item.ask)}</Text> */}
                </Col>
                <Col sm={1}>
                    {props.item.changePct > 0 ? (
                        <View style={{backgroundColor:'#00c087', marginTop: 5 ,borderRadius: 1, padding: 5,width:60,alignSelf:'flex-end'}}>
                            <Text style={[styles.textChangePct,{textAlign:'center'}]}>+{Number(props.item.changePct).toFixed(2)}</Text>
                        </View>
                    ):(
                        <View style={{backgroundColor:'#e50370', marginTop: 5 ,borderRadius: 1, padding: 5,width:60,alignSelf:'flex-end'}}>
                            <Text style={[styles.textChangePct,{textAlign:'center'}]}>{Number(props.item.changePct).toFixed(2)}</Text>
                        </View>
                    )}
                </Col>
            </Row>    
        </Animated.View>  
    </TouchableOpacity>   
)
ListRow.propTypes = {
    navigator: PropTypes.shape({ // eslint-disable-line
      push: PropTypes.func,
    }),
    handleOpenDetail: PropTypes.func,
  }

const enhance = compose(
    withHandlers({
      handleOpenDetail: ({ navigator }) => (item) => navigator.push({
          screen: MARKETS_DETAIL_SCREEN.screen,
          title: MARKETS_DETAIL_SCREEN.title,
          passProps: item
      }),
    }),
    connect()
  )

export default enhance(ListRow)