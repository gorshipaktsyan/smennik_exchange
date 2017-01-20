import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class RateList extends React.Component {

    mode = 'click';
    blurToSave = true;

    constructor(props){
        super(props);

        //bind this to the event method
        this.afterSaveCell = this.afterSaveCell.bind(this);
        this.beforeSaveCell = this.beforeSaveCell.bind(this);
    }

    afterSaveCell (row, cellName, cellValue) {        // a hook for after saving cell
        this.props.changeRateValue(row);
    };

    beforeSaveCell (row, cellName, cellValue) {       // a hook for before saving cell
        // You can do any validation on here for editing value,
        // return false for reject the editing
        return true;
    };

    render() {

        return (
            <div id="rates">
                <BootstrapTable data={ this.props.rateList } cellEdit={ this }>
                    <TableHeaderColumn editable={ false } width='30px' dataField='id' isKey={ true }>ID</TableHeaderColumn>
                    <TableHeaderColumn editable={ false } width='100px' dataField='code'>Code</TableHeaderColumn>
                    <TableHeaderColumn editable={ false } width='100px' dataField='name' className='aaa'>Country</TableHeaderColumn>
                    <TableHeaderColumn editable={ false } width='70px' dataField='amount'>Amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='buyCash'>Buy Cash</TableHeaderColumn>
                    <TableHeaderColumn dataField='buyNoncash'>Buy Non Cash</TableHeaderColumn>
                    <TableHeaderColumn dataField='sellCash'>Sell Cash</TableHeaderColumn>
                    <TableHeaderColumn dataField='sellNoncash'>Sell Non Cash</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

