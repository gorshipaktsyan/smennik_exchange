import React from "react";
import { connect } from 'react-redux';
import RateList from "./RateList";
import CurrencyList from "./CurrencyList";
import { bindActionCreators } from 'redux';
import { setRateData, getRates } from '../actions/index';
import { sendStore } from '../services/services';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.saveStore = this.saveStore.bind(this);

    this.state = {
      showRateList: true,
      showCurrencyList: true
    };
  }

  saveStore(event) {
    sendStore(this.props.rateList);
  };

  componentWillMount () {
    this.props.getRates();
  };

  render() {
    return (
        <div id="container">
          {this.state.showRateList && <RateList/>}
          {this.state.showCurrencyList && <CurrencyList/>}
          <input type="button" onClick={this.saveStore}></input>
        </div>
    );
  }

}

  //export the connected class
  function mapStateToProps(state) {
    return({
      rateList: state.rateList,
    })
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      setRateData: setRateData,
      getRates: getRates
    }, dispatch)
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);