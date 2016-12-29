import {connect} from "react-redux";
import { addRate, removeRate } from '../actions/index';
import CList from '../components/CurrencyList';

//export the connected class
const mapStateToProps = (state) => {
    return({
        currencyList: state.currencyList,

    })
};

const mapDispatchToProps = (dispatch) => {

    return {
        add: (row) => {
            dispatch(addRate(row))
        },

        remove: (code) => {
            dispatch(removeRate(code))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CList);
