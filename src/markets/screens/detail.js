import React, { Component } from 'react';
;
import { View,Text, Dimensions} from 'react-native';
import { Row,Column as Col } from 'react-native-flexbox-grid'

import { Container, Content, Tabs, Tab, Button, Icon} from 'native-base';
import { connect } from 'react-redux'
import styles from '../../commons/style'
import { Dropdown } from 'react-native-material-dropdown';
import { DetailOrderBook } from '../components/detail-orderbook';
import CandleChart from '../components/detail-candlechart';

export const MARKETS_DETAIL_SCREEN = {
    screen: 'markets.Detail',
    title: 'Markets',
  }
  
class MarketsDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndexTab: 0
        }
    }

    renderHeader(){
        return(
            <View style={{padding: 15, paddingTop: 5, paddingBottom: 5,}}>
            <Row size={4}>
                <Col sm={4}>
                    <Text style={{fontSize:24, fontWeight: 'bold', color : '#00c087', letterSpacing: -1.5}}>{format(this.props.lastdone)}
                    {/* <Text style={{fontSize: 20, color: '#e7e7e7', fontWeight: 'normal'}}></Text> */}
                    {/* <Text style={{fontWeight: 'normal', fontSize: 14, color: '#e50370', letterSpacing: -1}}> {format(this.props.ask)}</Text> */}
                    </Text>
                </Col>
                <Col sm={0}>
                    {/* <Text style={{fontWeight: 'normal',}}>{accounting.formatNumber(this.props.ask)}</Text> */}
                </Col>
            </Row>
            <Row size={2}>
                <Col sm={1.3}>
                    {this.props.changepct > 0 ? (
                        <Text style={{ color :'#00c087', fontWeight: 'bold', marginTop: 5, }}>+{Number(this.props.changepct).toFixed(2)}%</Text>
                    ):(
                        <Text style={{ color :'#e50370', fontWeight: 'bold', marginTop: 5, }}>{Number(this.props.changepct).toFixed(2)}%</Text>
                    )}
                </Col>
                <Col sm={.7}>
                    <Row size={2}>
                        <Col sm={0.5}>
                            <View style={{
                                paddingRight: 5,
                                width: 35,
                            }}>
                                <Text style={{ fontSize: RF(1.8), textAlign: 'right',}}>Low</Text>
                            </View>
                        </Col>
                        <Col sm={1.5}>
                            <View style={{
                                alignSelf: 'flex-end',
                            }}>
                                <Text style={{ fontWeight :'bold', fontSize: RF(1.8), textAlign: 'left', alignItems:'flex-end',}}>{`${this.price && (format(this.price.lowprice))}`}</Text>
                            </View>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row size={2}>
                <Col sm={1.3}>
                    <Text style={{fontWeight: 'bold', fontSize: RF(1.8)}}>{`Vol ${this.price && format(this.price.volumerp)}`}</Text>
                </Col>
                <Col sm={.7}>
                    <Row size={2}>
                        <Col sm={0.5}>
                            <View style={{
                                paddingRight: 5,
                                width: 35,
                            }}>
                                <Text style={{ fontSize: RF(1.8), textAlign: 'right',}}>High</Text>
                            </View>
                        </Col>
                        <Col sm={1.5}>
                            <View style={{
                                alignSelf: 'flex-end'
                            }}>
                                <Text style={{ fontWeight :'bold', fontSize: RF(1.8), textAlign: 'left', alignItems:'flex-end',}}>{`${this.price && (format(this.price.highprice))}`}</Text>
                            </View>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </View>
        )
    }
    componentDidUpdate = (prevProps, prevState) => {
      console.log(this.props)
    }
    
    render() {
        // if(this.props.wallets.isTimeout){
        //     return(<ModalTimeout retry={()=>this.handleRetry()}/>)
        // }
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                {/* {this.renderHeader()} */}
                <CandleChart></CandleChart>
                <Content>
                    <Row size={12} style={{
                        backgroundColor: '#eee',
                        padding: 2,
                        paddingRight: 10,   
                        paddingLeft: 10,
                    flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Col sm={3}>
                            <Dropdown
                                value='Candle'
                                dropdownOffset={{top:0,left:0}}
                                style={{
                                    fontSize: 15
                                }}
                                >
                            </Dropdown>
                        </Col>
                        <Col sm={9}>
                            {/* <Text style={{ textAlign: 'right', marginTop: 7}}>
                                <Text>Full  <Icon style={{ fontSize: 15, }}name='ios-expand' /></Text>
                            </Text> */}
                        </Col>
                    </Row>

                    <Tabs
                        lazy={false}
                        tabContainerStyle={{
                            elevation:0
                        }}
                        style={styles.tabs}
                        initialPage={0} style={styles.tab_header}
                        tabBarUnderlineStyle={styles.tabHeaderUnderline}
                        onChangeTab={({i,ref,from})=>this.setState({currentIndexTab:i})}>
                        <Tab heading = "Order Book"
                            activeTabStyle={styles.tabHeaderActive}
                            activeTextStyle={styles.tabHeaderTextActive}
                            textStyle={styles.tabHeaderText}
                            tabStyle={styles.tabHeader}>
                            <DetailOrderBook coinId={1}></DetailOrderBook>
                        </Tab>

                        <Tab heading="Aktifitas Transaksi"
                            activeTabStyle={styles.tabHeaderActive}
                            activeTextStyle={styles.tabHeaderTextActive}
                            textStyle={styles.tabHeaderText}
                            tabStyle={styles.tabHeader}>
                        </Tab>
                    </Tabs>

                </Content>
                    <Row size={4}>
                        <Col sm={2} style={{ padding: 5 }}>
                            <Button block style={{
                                backgroundColor: '#00c087',
                                height: 40,
                            }}>
                                <Text style={{ color: '#fff' }}>BUY</Text>
                            </Button>
                        </Col>
                        <Col sm={2} style={{ padding: 5 }}>
                            <Button block style={{
                                backgroundColor : '#e50370',
                                height: 40,
                            }}>
                                <Text style={{ color: '#fff' }}>SELL</Text>
                            </Button>
                        </Col>
                    </Row>
            </Container>
        )
    }
}
export default connect()(MarketsDetailScreen)
