import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SidebeepSwitch extends Component {



    render() {
        
        let classSwitch = `switch`;

        //checker
        if (this.props.Category != null) {
            classSwitch += ` switch-${this.props.Category}`;
        }
        if (this.props.Size != null) {
            classSwitch += ` switch-${this.props.Size}`;
        }

        //nested checker for Outline and Alt modifier for Type
        if(this.props.ColorType != null && this.props.Outline === 'true' && this.props.Alt === 'true'){
            classSwitch += ` switch-${this.props.ColorType}-outline-alt`;
        }else if(this.props.ColorType != null && this.props.Outline === 'true'){
            classSwitch += ` switch-${this.props.ColorType}-outline`;
        }else if(this.props.ColorType != null){
            classSwitch += ` switch-${this.props.ColorType}`;
        }


        // true or (others and null)
        if (this.props.Pill === 'true') {
            classSwitch += ` switch-pill`;
        }else{
            classSwitch += ``;
        }

        //for Cards, Tables, Tabs
        if (this.props.Float != null) {
            classSwitch += ` float-${this.props.Float}`;
        }


        //category must text or icon if want dataOn and dataOff
        
        return (
            <label className={classSwitch}>
                <input type="checkbox" className="switch-input" defaultChecked/>
                <span className="switch-label" data-on={this.props.textOn} data-off={this.props.textOff}></span>
                <span className="switch-handle"></span>
            </label>
        )
    }
}

SidebeepSwitch.PropTypes = 
{
    Category : PropTypes.string.isRequired,
    Size : PropTypes.string,
    ColorType : PropTypes.string,
    Pill : PropTypes.string,
    Outline : PropTypes.string,
    Alt : PropTypes.string,
    textOn : PropTypes.string,
    textOff : PropTypes.string,
    withIcon : PropTypes.string,
    Float : PropTypes.string
}

export default SidebeepSwitch;