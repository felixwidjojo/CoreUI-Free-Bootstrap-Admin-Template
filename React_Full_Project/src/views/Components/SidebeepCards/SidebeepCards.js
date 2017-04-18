import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebeepSwitch from '../SidebeepSwitch/';

class SidebeepCards extends Component {

    renderIcon(){

        let iconClass = `fa`;

        if (this.props.Icon != null) {
            iconClass += ` fa-${this.props.Icon}`;
        }
         
        return(
                this.props.Icon == null ? 
                ''
                :
                <i className={iconClass}></i>
        );
    }

    renderSwitch(){

        return(
            this.props.SwitchCategory == null && (this.props.SwitchSize == null || this.props.SwitchType == null || this.props.SwitchPill == null || this.props.SwitchFloat == null)  ?
            ''
            :
            <SidebeepSwitch Category={this.props.SwitchCategory} Type={this.props.SwitchType} Size={this.props.SwitchSize} Pill={this.props.SwitchPill} Float={this.props.SwitchFloat} />
        );
    }

    renderBadge(){

            let badgeClass = `badge`;

            if (this.props.BadgeType != null) {
                badgeClass += ` badge-${this.props.BadgeType}`;
            }
            if (this.props.BadgePill === 'true') {
                badgeClass += ` badge-pill`;
            }
            if (this.props.BadgeFloat != null) {
                badgeClass += ` float-${this.props.BadgeFloat}`;
            }

        return(
            this.props.BadgeType == null && (this.props.Pill == null || this.props.Pill == null) ?
            ''
            :
            <span className={badgeClass}>{this.props.BadgeTitle}</span>
        );
    }

    render() {
            
            let cardClassColumn = ``;
            let cardClass = `card `;
            
            if (this.props.ColumnXtraSmall != null) {
                cardClassColumn += ` col-xs-${this.props.ColumnXtraSmall}`;
            }
            if (this.props.ColumnSmall != null) {
                cardClassColumn += ` col-sm-${this.props.ColumnSmall}`;
            }
            if (this.props.ColumnMedium != null) {
                cardClassColumn += ` col-md-${this.props.ColumnMedium}`;
            }
            if (this.props.ColumnLarge != null) {
                cardClassColumn += ` col-lg-${this.props.ColumnLarge}`;
            }

            if (this.props.ColorType != null) {
                cardClass += ` card-${this.props.ColorType}`;
            }
            if (this.props.Inverse === 'true') {
                cardClass += ` card-inverse`;
            }
            if (this.props.CenterText === 'true') {
                cardClass += ` text-center`;
            }

        return (
            <div className={cardClassColumn}>
                <div className={cardClass}>
                    <div className="card-header">
                    {this.renderIcon()}
                    {this.props.Title}
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

SidebeepCards.PropTypes = 
{
    Title : PropTypes.string.isRequired,
    ColorType : PropTypes.string.isRequired,
    ColumnXtraSmall : PropTypes.string,
    ColumnSmall : PropTypes.string,
    ColumnMedium : PropTypes.string,
    ColumnLarge : PropTypes.string,
    Inverse : PropTypes.string,
    CenterText : PropTypes.string,
    Icon : PropTypes.string,
    BadgeType : PropTypes.string,
    BadgePill : PropTypes.string,
    BadgeFloat : PropTypes.string,
    BadgeTitle : PropTypes.string,
    SwitchCategory : PropTypes.string,
    SwitchType : PropTypes.string,
    SwitchSize : PropTypes.string,
    SwitchPill : PropTypes.string,
    SwitchFloat : PropTypes.string,
}

export default SidebeepCards;
