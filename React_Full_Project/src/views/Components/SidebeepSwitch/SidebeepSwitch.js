import React, { Component } from 'react';

class SidebeepSwitch extends Component {



    render() {

        const   
        {
            Category,
            Size,
            Type,
            Pill,
            Outline,
            Alt,
            textOn,
            textOff,
            withIcon,
            Float
        }
        = this.props
        
        let classSwitch = `switch`;

        //checker
        if (this.props.Category != null) {
            classSwitch += ` switch-${this.props.Category}`;
        }
        if (this.props.Size != null) {
            classSwitch += ` switch-${this.props.Size}`;
        }

        //nested checker for Outline and Alt modifier for Type
        if(this.props.Type != null && this.props.Outline == 'yes' && this.props.Alt == 'yes'){
            classSwitch += ` switch-${this.props.Type}-outline-alt`;
        }else if(this.props.Type != null && this.props.Outline == 'yes'){
            classSwitch += ` switch-${this.props.Type}-outline`;
        }else if(this.props.Type != null){
            classSwitch += ` switch-${this.props.Type}`;
        }


        // yes or (others and null)
        if (this.props.Pill == 'yes') {
            classSwitch += ` switch-pill`;
        }else{
            classSwitch += ``;
        }

        //for Cards, Tables, Tabs
        if (this.props.Float != null) {
            classSwitch += ` switch-${this.props.Float}`;
        }


        //category must text or icon if want dataOn and dataOff
        
        return (
            <label className={classSwitch}>
                <input type="checkbox" className="switch-input" defaultChecked/>
                <span className="switch-label" data-on={textOn} data-off={textOff}></span>
                <span className="switch-handle"></span>
            </label>
        )
    }
}

export default SidebeepSwitch;