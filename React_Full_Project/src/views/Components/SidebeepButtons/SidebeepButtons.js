import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepButtons extends Component {

    render() {
        
        let buttonClass = `btn`;
        
        //checker
        if (this.props.ColorType != null) {
            buttonClass += ` btn-${this.props.Type}`;
        }
        if (this.props.Size != null) {
            buttonClass += ` btn-${this.props.Size}`;
        }
        if (this.props.Block != null) {
            buttonClass += ` btn-${this.props.Block}`;
        }
        if (this.props.SocialName != null) {
            buttonClass += ` btn-${this.props.SocialName}`;
        }
        if (this.props.isActive === 'true') {
            buttonClass += ' active';
        }
        
        if (this.props.isDisabled === 'true') {
            this.props.isDisabled = 'disabled';
        }
        
        
        return (
                <button 
                type={this.props.Type}
                name={this.props.Name} 
                className={buttonClass}
                disabled={this.props.isDisabled}
                >
                <span>{this.props.children}</span>
                </button> 
        )
    }
}

SidebeepButtons.PropTypes = 
{
    Name : PropTypes.string.isRequired,
    Type : PropTypes.string.isRequired,
    ColorType : PropTypes.string,
    Size : PropTypes.string,
    Block : PropTypes.string,
    SocialName : PropTypes.string,
    SocialType : PropTypes.string,
    isActive : PropTypes.string,
    isDisabled : PropTypes.string,

}

export default SidebeepButtons;