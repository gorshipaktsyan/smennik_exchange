import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class CurrencyList extends React.Component {

    mode = 'checkbox';
    selected = this.props.currencyList.checklist;
    clickToSelect = true;

    constructor(props) {
        super(props);

        //bind this to the event method
        this.onSelect = this.onSelect.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
    }

    onSelect (row, isSelected, e) {

        if (isSelected) {
            this.props.add(row);
        } else {
            this.props.remove(row.code);
        }

    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.selected = nextProps.currencyList.checklist;
    }


    onSelectAll (isSelected, rows) {

    };

    render() {

        return (
            <div id="currencies">
                <BootstrapTable data={this.props.currencyList.list} selectRow={this} striped hover >
                    <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
                    <TableHeaderColumn dataField='currency'>Currency</TableHeaderColumn>
                    <TableHeaderColumn dataField='amount'>amount</TableHeaderColumn>
                    <TableHeaderColumn dataField='code'>code</TableHeaderColumn>
                </BootstrapTable>
            </div>

        )
    }
}