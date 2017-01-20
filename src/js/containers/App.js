import React from "react";
import { connect } from 'react-redux';
import RateList from "./RateList";
import CurrencyList from "./CurrencyList";
import { bindActionCreators } from 'redux';
import { setRateData, getRates } from '../actions/index';
import { sendStore, logOut } from '../services/services';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.saveStore = this.saveStore.bind(this);
    this.signOut = this.signOut.bind(this);

    this.state = {
      showRateList: true,
      showCurrencyList: true
    };
  }

  saveStore(event) {
    sendStore(this.props.rateList);
  };

  signOut(event) {
    logOut();
  };

  componentWillMount () {
    this.props.getRates();
  };

  render() {
    return (
        <div id="container">
          <div id="list">
            {this.state.showRateList && <RateList/>}
            <div id="buttons">
              <Button bsStyle="primary" bsSize="small" onClick={this.saveStore}>Save</Button>
              <Button bsStyle="primary" bsSize="small" onClick={this.signOut}>Logout</Button>
            </div>
          </div>
          {this.state.showCurrencyList && <CurrencyList/>}

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