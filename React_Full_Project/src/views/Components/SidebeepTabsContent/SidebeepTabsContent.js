import React, { Component } from 'react';
import { TabContent } from 'reactstrap';

class SidebeepTabsContent extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    
    render(){
        return(
            <TabContent activeTab={this.state.activeTab}>
                    {this.props.children}
            </TabContent>
        );
    }
}

export default SidebeepTabsContent;
