import React, { Component } from 'react';
import PropTypes from 'prop-types' ;

class SidebeepRadio extends Component {

    render(){

        let radioClass = 'radio';

        return(
                this.props.Inline === 'true' ?
                <label className="radio-inline" htmlFor={this.props.HtmlFor}>
                    <input type="radio" id={this.props.ID} name={this.props.Name} value={this.props.Value}/> {this.props.Title}
                </label>
                :
                <div className={radioClass}>
                    <label htmlFor={this.props.HtmlFor}>
                        <input type="radio" id={this.props.ID} name={this.props.Name} value={this.props.Value}/> {this.props.Title}
                    </label>
                </div>
        );
    }
}

SidebeepRadio.PropTypes =
{
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    Value : PropTypes.string.isRequired,
    Title : PropTypes.string.isRequired,
    Inline : PropTypes.string,
    HtmlFor : PropTypes.string
}

export default SidebeepRadio;
