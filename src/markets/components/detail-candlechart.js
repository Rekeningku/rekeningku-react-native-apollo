import ChartView from 'react-native-highcharts'
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native'
import { View, Icon, Spinner } from 'native-base'
import { connect } from 'react-redux'
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose'


    

const CandleChart = ({data:{loading, error, chart}}) => {
    var Highcharts='Highcharts';
    var component = this;
    var conf={
        plotOptions: {
            candlestick: {
                color: '#e50370',
                upColor: '#00c087',
            }
        },
        rangeSelector: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            // milis second
            tickInterval: 3600 * 1000
        },        
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        chart: {
            renderTo: 'container',
            type: 'candlestick',
            marginRight: 10,
            marginBottom: 25,
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            xDateFormat: '%Y-%m-%d %H:%M',
            shared: true
        },
        series: [{
            showInLegend: false, 
            name:'',
            type: 'candlestick',
            color: '#e50370',
            data: (function () {
                //TODO: show loaidng in here
                console.log(loading)
                data = chart
                chart_data = []
                if(data){
                    for(i = 0; i < data.length; i++){
                        chart_data.push([parseFloat(data[i].datetime),parseFloat(data[i].openprice),parseFloat(data[i].highprice),parseFloat(data[i].lowprice),parseFloat(data[i].closeprice)])
                    }
                    console.log(chart_data)
                    return chart_data
                }
            }()),
            // dataGrouping: {
            //     units: [
            //         [
            //             'week', // unit name
            //             [1] // allowed multiples
            //         ], [
            //             'month',
            //             [1, 2, 3, 4, 6]
            //         ]
            //     ]
            // }
        }]
        
    }

    const options = {
        global: {
            useUTC: false
        },
        lang: {
            decimalPoint: ',',
            thousandsSep: '.'
        }
    };
    return(
        <View  style={[styles.modalBackground, {height: 200}]}>
        {loading ? (
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                    size={1}
                        color="#333"/>
                </View>
        ):(
            <ChartView stock={true} style={{height:200}} config={conf} options={options}></ChartView>
        )}
        </View>
    )
}

const CHART_CANDLE_QUERY = gql`{
 chart(coinid: 1, f: "d", t: 2) {
        datetime
        openprice
        closeprice
        lowprice
        highprice
        volumerp
        volume
    }
}`
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      width: 40,
      height: 40,
      borderRadius: 100,
      marginTop: 20,
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  })

function mapStateToProps(states){
    console.log('xxxx')
    console.log(states)
    return{
        detailMarket: states.marketsReducer
    }
}
const enhance = compose(
    connect(mapStateToProps),
    graphql(CHART_CANDLE_QUERY)
)
export default enhance(CandleChart)
