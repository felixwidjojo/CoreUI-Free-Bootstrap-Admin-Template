import React, { Component } from 'react';
import { Nav, NavLink, NavItem, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SidebeepTabsNavLink extends Component {

    render(){
        return(
                <NavItem>
                    <NavLink
                    className= {classnames({ active: this.state.activeTab === this.props.ID})}
                    onClick= {() => { this.toggle(this.props.ID); }}
                    >
                        {this.props.children}
                    </NavLink>
                </NavItem>
        );
    }
}

SidebeepTabsNavLink.PropTypes =
{
    ID : PropTypes.string.isRequired,
}

export default SidebeepTabsNavLink;