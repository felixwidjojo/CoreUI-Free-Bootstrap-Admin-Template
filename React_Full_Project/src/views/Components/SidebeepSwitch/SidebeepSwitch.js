import React, { Component } from 'react';

class SidebeepSwitch extends Component {



    render() {

        const   
        {
            Category,
            Size,
            Type,
            Outline,
            withText,
            withIcon,

        }
        = this.props
        
        let classSwitch = `switch`;

        if (this.props.Category != null) {
            classSwitch += ` switch-${this.props.Category}`;
        }
        if (this.props.Size != null) {
            classSwitch += ` switch-${this.props.Size}`;
        }
        if (this.props.Type != null) {
            classSwitch += ` switch-${this.props.Type}`;
        }


        
        return (
            <label className={classSwitch}>
                <input type="checkbox" className="switch-input" defaultChecked/>
                <span className="switch-label"></span>
                <span className="switch-handle"></span>
            </label>
        )
    }
}

export default SidebeepSwitch;