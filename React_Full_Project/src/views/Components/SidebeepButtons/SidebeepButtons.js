import React, { Component } from 'react';

class SidebeepButtons extends Component {



    render() {

        const   
        {
            Name,
            Type,
            Size,
            Block,
            SocialName,
            SocialType,
            isActive,
            isDisabled,
        }
        = this.props
        
        let buttonClass = `btn`;
        
        //checker
        if (this.props.Type != null) {
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
            this.props.isDisabled === 'disabled';
        }
        
        
        return (
                <button 
                type="button" 
                name={Name} 
                className={buttonClass}
                disabled={isDisabled}
                >
                <span>{this.props.children}</span>
                </button> 
        )
    }
}

export default SidebeepButtons;