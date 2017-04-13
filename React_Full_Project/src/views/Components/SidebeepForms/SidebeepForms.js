import React, { Component } from 'react';
import SidebeepInput from '../SidebeepInput';

class SidebeepForms extends Component {
    

    render(){
        const
            {
                Row,
                TitleFor,
                Title,
                LabelColumn,
                InputColumn,
            }
            = this.props

        let formClass = `form-group`;
        let labelClass = `form-control-label`;
        let inputClass = ``;
        let isDisabled = 'false';

        if(this.props.Row == 'yes'){
            formClass += ` row`;
        }
        
        if(this.props.LabelColumn != null){
            labelClass += ` col-md-${LabelColumn}`;
        }

        if(this.props.InputColumn != null){
            inputClass += ` col-md-${InputColumn}`;
        }

        return(
            <div className={formClass}>
                <label className={labelClass} htmlFor={TitleFor}>{Title}</label>
                <div className={inputClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SidebeepForms; 