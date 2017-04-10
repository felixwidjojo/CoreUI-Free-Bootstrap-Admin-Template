import React, { Component } from 'react';
import SidebeepSwitch from '../SidebeepSwitch/';

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

    renderSwitch(){
        const
            {
                SwitchCategory,
                SwitchType,
                SwitchSize,
                SwitchPill,
                SwitchFloat,

            }
            = this.props
        return(
            this.props.SwitchCategory == null && (this.props.SwitchSize == null || this.props.SwitchType == null || this.props.SwitchPill == null || this.props.SwitchFloat == null)  ?
            ''
            :
            <SidebeepSwitch Category={SwitchCategory} Type={SwitchType} Size={SwitchSize} Pill={SwitchPill} Float={SwitchFloat} />
        );
    }

    renderBadge(){
        const
            {
                BadgeType,
                BadgePill,
                BadgeFloat,
            }
            = this.props

            let badgeClass = `badge`;

            if (this.props.BadgeType != null) {
                badgeClass += ` badge-${BadgeType}`;
            }
            if (this.props.BadgePill == 'yes') {
                badgeClass += ` badge-pill`;
            }
            if (this.props.BadgeFloat != null) {
                badgeClass += ` float-${BadgeFloat}`;
            }

        return(
            this.props.BadgeType == null && (this.props.Pill == null || this.props.Pill == null) ?
            ''
            :
            <span className={badgeClass}>Success</span>
        );
    }

    render() {
        const   
            {
                ColumnXtraSmall,
                ColumnSmall,
                ColumnMedium,
                ColumnLarge,
                Type,
                Title,
                Inverse,
                CenterText,
            }
            = this.props
            
            let cardClassColumn = ``;
            let cardClass = `card `;
            
            if (this.props.ColumnXtraSmall != null) {
                cardClassColumn += ` col-xs-${ColumnXtraSmall}`;
            }
            if (this.props.ColumnSmall != null) {
                cardClassColumn += ` col-sm-${ColumnSmall}`;
            }
            if (this.props.ColumnMedium != null) {
                cardClassColumn += ` col-md-${ColumnMedium}`;
            }
            if (this.props.ColumnLarge != null) {
                cardClassColumn += ` col-lg-${ColumnLarge}`;
            }

            if (this.props.Type != null) {
                cardClass += ` card-${Type}`;
            }
            if (this.props.Inverse == 'yes') {
                cardClass += ` card-inverse`;
            }
            if (this.props.CenterText == 'yes') {
                cardClass += ` text-center`;
            }





        return (
            <div className={cardClassColumn}>
                <div className={cardClass}>
                    <div className="card-header">
                    {this.renderIcon()}
                    {Title}
                    {this.renderSwitch()}
                    {this.renderBadge()}
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
