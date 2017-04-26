import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

class SidebeepModals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    renderButton(){
        return(
            this.props.ButtonTitle !== null ?
            <Button onClick={this.toggle}>{this.props.ButtonTitle}</Button>
            :
            ''
        );
    }

    render(){

        let modalClass = '';

        return(
            <div>
                {this.renderButton()}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + modalClass}>
                    <ModalHeader toggle={this.toggle}>{this.props.Title}</ModalHeader>
                    <ModalBody>
                    {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>{this.props.PrimaryText}</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>{this.props.SecondaryText}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

SidebeepModals.PropTypes =
{
    ButtonTitle : PropTypes.string,
    Title : PropTypes.string,
    Content : PropTypes.string,
    PrimaryText : PropTypes.string,
    SecondaryText : PropTypes.string
}

export default SidebeepModals;