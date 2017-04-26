import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepTables extends Component {

    render(){
        let tableClass = `table`;

        if(this.props.Striped === 'true'){
            tableClass += ` table-striped`
        }
        if(this.props.Bordered === 'true'){
            tableClass += ` table-bordered`
        }
        if(this.props.Condensed === 'true'){
            tableClass += ` table-condensed`
        }
        //pagination
        return(
            <table className={tableClass}>
                {this.props.children}
            </table>
        );
    }
}

SidebeepTables.PropTypes = 
{
    Striped : PropTypes.string,
    Bordered : PropTypes.string,
    Condensed : PropTypes.string,
}

export default SidebeepTables;