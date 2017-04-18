import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepInput extends Component {

    render(){

        let inputClass='form-control';

        if(this.props.isDisabled === 'true'){
            return(
                <div>
                    <input className={inputClass} type={this.props.Type} id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} disabled />
                </div>
            ); 
        }else{
            return(
                this.props.Type === 'password' ?
                <div>
                    <input className={inputClass} type="password" id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} />
                </div>
                :
                <div>
                    <input className={inputClass} type="text" id={this.props.ID} name={this.props.Name} placeholder={this.props.Placeholder} />
                </div>
            );
        }
        
    }

}

SidebeepInput.PropTypes = {
    Type : PropTypes.string.isRequired,
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    Placeholder : PropTypes.string,
    isDisabled : PropTypes.string
};

export default SidebeepInput; 