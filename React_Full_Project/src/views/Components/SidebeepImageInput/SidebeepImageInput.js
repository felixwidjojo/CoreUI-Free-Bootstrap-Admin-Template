import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepImageInput extends Component {

    render(){

        if(this.props.isDisabled === true){
            return(
                <input type="file" id={this.props.ID} name={this.props.Name} disabled/>
            );
        }else{
            return(
                this.props.isMultiple === 'true' ?
                <input type="file" id={this.props.ID} name={this.props.Name} multiple/>
                :
                <input type="file" id={this.props.ID} name={this.props.Name}/>
            );
        }

    }
}

SidebeepImageInput.propTypes = {
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    isDisabled : PropTypes.string,
    isMultiple : PropTypes.string
};

export default SidebeepImageInput;