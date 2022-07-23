import { Modal } from "flowbite-react"
import React, { Component  } from 'react'

export default class ImageModal extends Component {
    
    state = {modalShown: false}

    changeModalState = () => this.setState({ modalShown: !this.state.modalShown })

    render() {
        return (
            <div>
                <Modal
                    show={this.state.modalShown}
                    onClose={this.changeModalState}
                >
                    <Modal.Header>
                        <p>{this.props.children}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-auto">
                            <img src={this.props.src} alt={this.props.children}/>
                        </div>
                    </Modal.Body>
                </Modal>
                <img src={this.props.src} onClick={this.changeModalState} alt={this.props.children} className={"float-" + this.props.float} />
            </div>
        )
    }
}