import {Card, Button, Modal } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import React, { Component, useState } from 'react';

class ArticleDisplay extends Component {

    state = {modalShown: false};

    changeModalState = () => this.setState({modalShown: !this.state.modalShown})

    render() {
        var trimLength = 350;
        var trimmedString = this.props.children.length > trimLength ? this.props.children.substring(0, trimLength - 3) + "..." : this.props.children.substring(0, trimLength);

        return (
            <div>
                <Modal
                    show={this.state.modalShown}
                    size="xl"
                    onClose={this.changeModalState}
                >
                    <Modal.Header>
                        <p className="text-2xl">{this.props.title}</p>
                        <p>{this.props.year}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {this.props.children}
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.changeModalState}>
                            Open Page
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Card imgSrc={this.props.image}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {this.props.title}
                    </h5>
                    <h5 className="text-m font-bold tracking-tight text-gray-900 dark:text-white">
                        {this.props.year}
                    </h5>
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{this.props.tag}</kbd>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {trimmedString}
                    </p>
                    <button onClick={this.changeModalState} href="/issues" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-maroon-100 rounded-lg hover:bg-white hover:text-maroon-100 focus:ring-4 focus:outline-none focus:ring-ghostly-black dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </Card>
            </div>
        )
    }
}

export default ArticleDisplay;