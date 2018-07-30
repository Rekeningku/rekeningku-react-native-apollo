import { compose, withState, withHandlers, lifecycle, pure } from 'recompose';
import { connect } from 'react-redux';
import MarketsScreen from './index';
import { client } from '../apollo-client';
export const MARKETS_SCREEN = {
    screen: 'markets.Index',
    title: 'Markets',
}

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
        }
    }),pure
)
export default enhance(MarketsScreen)