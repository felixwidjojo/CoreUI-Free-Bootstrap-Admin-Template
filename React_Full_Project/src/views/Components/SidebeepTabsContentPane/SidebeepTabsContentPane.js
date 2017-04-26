import React, { Component } from 'react';
import { TabPane } from 'reactstrap';
import PropTypes from 'prop-types';

class SidebeepTabsContentPane extends Component {
    render(){
        return(
            <TabPane tabId={this.props.ID}>
                {this.props.children}
            </TabPane>
        );
    }
}

SidebeepTabsContentPane.PropTypes =
{
    ID : PropTypes.string.isRequired,
}

export default SidebeepTabsContentPane;