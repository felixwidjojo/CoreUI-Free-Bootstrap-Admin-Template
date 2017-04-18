import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepTextArea extends Component {
    
    render(){

        const
        {
            Rows,
            ID,
            Name,
            Placeholder,
        }
        = this.props

        let inputClass='form-control';

        return(
            <div>
                <textarea className={inputClass} rows={Rows} id={ID} name={Name} placeholder={Placeholder} ></textarea>
            </div>
        );

    }
}

SidebeepTextArea.PropTypes =
{
    Rows : PropTypes.string.isRequired,
    ID : PropTypes.string.isRequired,
    Name : PropTypes.string.isRequired,
    Placeholder : PropTypes.string
}

export default SidebeepTextArea;