import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SidebeepTabs extends Component {

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

    NavLink1(){
        return(
            this.props.Title1 !== null ?
            <NavItem>
                <NavLink
                className= {classnames({ active: this.state.activeTab === '1'})}
                onClick= {() => { this.toggle('1'); }}
                >
                {this.props.Title1}
                </NavLink>
            </NavItem>
            :
            ''
        );
    }
    NavLink2(){
        return(
            this.props.Title2 !== null ?
            <NavItem>
                <NavLink
                className= {classnames({ active: this.state.activeTab === '2'})}
                onClick= {() => { this.toggle('2'); }}
                >
                {this.props.Title2}
                </NavLink>
            </NavItem>
            :
            ''
        );
    }
    NavLink3(){
        return(
            this.props.Title3 !== null ?
            <NavItem>
                <NavLink
                className= {classnames({ active: this.state.activeTab === '3'})}
                onClick= {() => { this.toggle('3'); }}
                >
                {this.props.Title3}
                </NavLink>
            </NavItem>
            :
            ''
        );
    }
    NavLink4(){
        return(
            this.props.Title4 !== null ?
            <NavItem>
                <NavLink
                className= {classnames({ active: this.state.activeTab === '4'})}
                onClick= {() => { this.toggle('4'); }}
                >
                {this.props.Title4}
                </NavLink>
            </NavItem>
            :
            ''
        );
    }
    NavLink5(){
        return(
            this.props.Title5 !== null ?
            <NavItem>
                <NavLink
                className= {classnames({ active: this.state.activeTab === '5'})}
                onClick= {() => { this.toggle('5'); }}
                >
                {this.props.Title5}
                </NavLink>
            </NavItem>
            :
            ''
        );
    }

    render(){
        return(
            <div>
                <Nav tabs>
                    {this.NavLink1()}
                    {this.NavLink2()}
                    {this.NavLink3()}
                    {this.NavLink4()}
                    {this.NavLink5()}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {this.props.children}
                </TabContent>
            </div>
        );
    }
}

SidebeepTabsNav.PropTypes = 
{
    ID : PropTypes.string,
    Title1 : PropTypes.string,
    Title2 : PropTypes.string,
    Title3 : PropTypes.string,
    Title4 : PropTypes.string,
    Title5 : PropTypes.string,
    Content : PropTypes.string

}

export default SidebeepTabs;