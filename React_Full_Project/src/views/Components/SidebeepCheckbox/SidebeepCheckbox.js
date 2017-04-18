import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepCheckbox extends Component {

    render(){
        
        let checkboxClass = 'radio';

        return(
            this.props.Inline === 'true' ?
            <label className="checkbox-inline" htmlFor={this.props.HtmlFor}>
                <input type="checkbox" id={this.props.ID} name={this.props.Name} value={this.props.Value}/> {this.props.Title}
            </label>
            :
            <div className={checkboxClass}>
                <label htmlFor={this.props.HtmlFor}>
                    <input type="checkbox" id={this.props.ID} name={this.props.Name} value={this.props.Value}/> {this.props.Title}
                </label>
            </div>
        );

    }
}

SidebeepCheckbox.PropTypes =
{
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    Value : PropTypes.string.isRequired,
    Title : PropTypes.string.isRequired,
    Inline : PropTypes.string,
    HtmlFor : PropTypes.string
}

export default SidebeepCheckbox; 