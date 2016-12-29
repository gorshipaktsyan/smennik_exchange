import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { changeRateValue } from '../actions/index';
import Rlist from '../components/RateList';

//export the connected class
const mapStateToProps = (state) => {

    return({
        rateList: state.rateList,
    })
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       changeRateValue: changeRateValue
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Rlist);
