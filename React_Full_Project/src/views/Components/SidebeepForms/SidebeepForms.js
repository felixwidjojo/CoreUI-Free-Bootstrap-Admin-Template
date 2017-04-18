import React, { Component } from 'react';
import PropTypes from 'prop-types' ;

class SidebeepForms extends Component {
    

    render(){

        let formClass = `form-group`;
        let labelClass = `form-control-label`;
        let inputClass = ``;

        if(this.props.Row === 'true'){
            formClass += ` row`;
        }
        
        if(this.props.LabelColumn != null){
            labelClass += ` col-md-${this.props.LabelColumn}`;
        }

        if(this.props.InputColumn != null){
            inputClass += ` col-md-${this.props.InputColumn}`;
        }

        return(
            <div className={formClass}>
                <label className={labelClass} htmlFor={this.props.HtmlFor}>{this.props.Title}</label>
                <div className={inputClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SidebeepForms.PropTypes =
{
    HtmlFor : PropTypes.string,
    Title : PropTypes.string.isRequired,
    LabelColumn : PropTypes.string.isRequired,
    InputColumn : PropTypes.string.isRequired,
}

export default SidebeepForms; 