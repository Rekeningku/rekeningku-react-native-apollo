import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, TouchableHighlight, ScrollView, RefreshControl, FlatList} from 'react-native'
import { Container, Header, Tabs, Tab, TabHeading, Button, Left, Right, Body, Title, Icon, Content, Toast } from 'native-base';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import {Column as Col,Row} from 'react-native-flexbox-grid'
import { compose, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql, Query } from 'react-apollo';
import ListRow from '../components/index-listrow';

export const MARKETS_SCREEN = {
  screen: 'markets.Index',
  title: 'Markets',
}

const renderOnLoading = () => {
    // console.log('on loading')
    let items = []
    for(i = 0; i < 10;i++){
      items.push(
        <TouchableHighlight key={i}>
            <Row
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderBottomColor: '#e0e0e0',
                    borderBottomWidth: 0.5,
                }}
                size={3}>
                <Col sm={1}>
                    <ShimmerPlaceHolder autoRun={true} visible={false} width={100}/>
                    <ShimmerPlaceHolder autoRun={true} visible={false} width={50} height={10} style={{
                        marginTop: 7,
                    }}/>
                </Col>
                <Col sm={1}>
                    <ShimmerPlaceHolder autoRun={true} visible={false} width={100} />
                    {/* <ShimmerPlaceHolder autoRun={true} visible={false} width={50} height={10} style={{
                        marginTop: 7,
                    }}/> */}
                </Col>
                <Col sm={1}>
                    <ShimmerPlaceHolder autoRun={true} visible={false} width={55} height={25} style={{
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                        marginTop: 5,
                    }}/>
                </Col>
            </Row>
        </TouchableHighlight>
      )
     }
    return items
  }

const renderOnSuccess = (loadingState, data, refetch, props) => {
    return (
      <Container style={{backgroundColor:'#fff'}} >
        <ScrollView keyboardShouldPersistTaps={'always'} refreshControl={<RefreshControl colors={['#2B79C9']} onRefresh={()=>refetch()} refreshing={loadingState}/>}>
            <View style={{backgroundColor:'#FAFAFA',flex:1}}>

                <View style={{padding:10, backgroundColor: '#f7f7f7'}}>
          {/* <ModalTimeout open={this.props.markets.isTimeout}  retry={()=>this.handleRetry()} /> */}
                    <Row size={3}>
                        <Col sm={1}>
                            <Text style={{color:'grey',textAlign:'left'}}>Pair/Vol</Text>
                        </Col>
                        <Col sm={1}>
                            <Text style={{color:'grey',}}>Last Price</Text>
                        </Col>
                        <Col sm={1} style={{
                            paddingRight: 10
                        }}>
                            <Text style={{color:'grey',textAlign:'right', marginRight: 2}}>24hr</Text>
                        </Col>
                    </Row>
                </View>

                <Content style={{
                    backgroundColor: '#fff'
                }}>
                    <FlatList data={data} renderItem={({item,index})=>(
                        <ListRow  key={index} item={item} index={index} {...props} />
                    )}/>
                </Content>

            </View>
        </ScrollView>
      </Container>
    )
}

const renderOnError = () => {

}

export const MarketsScreen = (props) => (
    <Query query={PRICES_QUERY}>
    {({ loading, error, data, refetch }) => {
      if(loading){
        return (renderOnLoading())
      }
      if(error){
        return (<View><Text>{error}</Text></View>)
      }
      return (renderOnSuccess(loading,data.prices,refetch,props))

    }}
    </Query>
)
const mapStateToProps = state => ({

})
const PRICES_QUERY = gql`
  {
    prices{
        accountId
        accountCode
        accountName
        openPrice
        lowPrice
        highPrice
        lastDone
        changePct
        volume
        volumeRp
    }
  }
`;
const fetchPrices = graphql(PRICES_QUERY);

const componentWithData = compose(
  connect(mapStateToProps),
  pure
)
export default componentWithData(MarketsScreen)
