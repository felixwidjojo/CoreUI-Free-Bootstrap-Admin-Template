import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepInput extends Component {

    renderAppendLeft(){

        let spanAppendClass = `input-group-addon `;
        let iconAppendClass = `fa`;

        if(this.props.AppendIconLeft != null){
            iconAppendClass += ` fa-${this.props.AppendIconLeft}`;
        }

        return(
            (this.props.AppendIconLeft != null || this.props.AppendTitleLeft != null) ?
            <span className={spanAppendClass}><i className={iconAppendClass}></i>{this.props.AppendTitleLeft}</span>
            :
            ''
        );
    }

    renderAppendRight(){

        let spanAppendClass = `input-group-addon `;
        let iconAppendClass = `fa`;

        if(this.props.AppendIconRight != null){
            iconAppendClass += ` fa-${this.props.AppendIconRight}`;
        }

        return(
            (this.props.AppendIconRight != null || this.props.AppendTitleRight !=  null) ?
            <span className={spanAppendClass}><i className={iconAppendClass}></i>{this.props.AppendTitleRight}</span>
            :
            ''
        );
    }


    render(){

        let inputClass=`form-control`;

        if(this.props.Icon != null){
            inputClass += ` form-control${this.props.Icon}`
        }

        if(this.props.isDisabled === 'true'){
            return(
                <div className={this.props.InputGroup}>
                    
                    <input className={inputClass} type="text" id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} disabled />
                    {this.renderAppendRight()}
                    {this.renderAppendLeft()}
                </div>
            ); 
        }else if(this.props.Type === 'email'){
            return(
                <div className={this.props.InputGroup}>
                    {this.renderAppendLeft()}
                    <input className={inputClass} type="email" id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} disabled />
                    {this.renderAppendRight()}
                </div>
            ); 
        }else{
            return(
                this.props.Type === 'password' ?
                <div className={this.props.InputGroup}>
                    {this.renderAppendLeft()}
                    <input className={inputClass} type="password" id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} />
                    {this.renderAppendRight()}
                </div>
                :
                <div className={this.props.InputGroup}>
                    {this.renderAppendLeft()}
                    <input className={inputClass} type="text" id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} />
                    {this.renderAppendRight()}
                </div>
            );
        }
    }

}

SidebeepInput.PropTypes = {
    Type : PropTypes.string.isRequired,
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    Icon : PropTypes.string,
    Placeholder : PropTypes.string,
    isDisabled : PropTypes.string,
    InputGroup : PropTypes.string,
    AppendIconLeft : PropTypes.string,
    AppendIconRight : PropTypes.string,
    AppendTitleLeft : PropTypes.string,
    AppendTitleRight : PropTypes.string
};

export default SidebeepInput; 