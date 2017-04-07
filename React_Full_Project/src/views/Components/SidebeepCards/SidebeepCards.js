import React, { Component } from 'react';

class SidebeepCards extends Component {

    renderIcon(){
        const   
            {
                Icon,
            }
            = this.props

        let iconClass = `fa`;

        if (this.props.Icon != null) {
            iconClass += ` fa-${Icon}`;
        }
         
        return(
                this.props.Icon == null ? 
                ''
                :
                <i className={iconClass}></i>
        );
    }



    render() {
        const   
            {
                columnSmall,
                columnMedium,
                columnLarge,
                Type,
                Title,
                Inverse,
            }
            = this.props
        
        

        return (
            
            <div className={`${columnSmall} ${columnMedium} ${columnLarge}`}>
                <div className={`card ${Type} ${Inverse}`}>
                    <div className="card-header">
                    {this.renderIcon()}
                    {Title}
                    </div>
                    <div className="card-block">
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebeepCards;
