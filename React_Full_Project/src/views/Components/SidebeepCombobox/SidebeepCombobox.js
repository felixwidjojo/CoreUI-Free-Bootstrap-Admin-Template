import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepCombobox extends Component {

    render(){

        let inputCombo=`form-control`;
        // <option value="0">Please select</option> : type of children
        return(
            this.props.isMultiple == 'true' ?
            <select className={inputCombo} id={this.props.ID} name={this.props.Name} size={this.props.Size} multiple>
                {this.props.children}
            </select>
            :
            <select className={inputCombo} id={this.props.ID} name={this.props.Name} size={this.props.Size}>
                {this.props.children}
            </select>
        );
    }
}

SidebeepCombobox.PropTypes = 
{
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    Size : PropTypes.string,
    isMultiple : PropTypes.string
}

export default SidebeepCombobox;