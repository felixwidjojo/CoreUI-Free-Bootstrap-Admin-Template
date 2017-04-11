import React, { Component } from 'react';

class SidebeepInput extends Component {


    render(){
        const
        {
            InputType,
            ID,
            Name,
            Placeholder
        }
        = this.props

        let inputClass= `form-control`;

        return(
            <div className="col-md-9">
                <input className={inputClass} type={InputType} id={ID} name={Name} placeholder={Placeholder} />
            </div>
        );
    }

}

export default SidebeepInput; 