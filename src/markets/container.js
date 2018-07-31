import { compose, withState, withHandlers, lifecycle, pure } from 'recompose';
import { connect } from 'react-redux';
import MarketsScreen from './index';
import { client } from '../apollo-client';
import { graphql } from 'react-apollo';
import { PRICES } from '../graphql/api/queires/prices';
import { IS_AUTHENTICATED } from '../graphql/client/queries/auth';
import {ScreenVisibilityListener as RNNScreenVisibilityListener} from 'react-native-navigation';
export const MARKETS_SCREEN = {
    screen: 'markets.Index',
    title: 'Markets',
}
const enhance = compose(
    connect(),
    graphql(PRICES),
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
        }
    }),pure
)
export default enhance(MarketsScreen)