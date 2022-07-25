import {Card, Button, Modal, Badge } from 'flowbite-react';
import React, { Component } from 'react';

class ArticleDisplay extends Component {

    state = {modalShown: false};

    changeModalState = () => this.setState({modalShown: !this.state.modalShown})

    render() {
        var trimLength = 500;
        var trimmedString = this.props.children.length > trimLength ? this.props.children.substring(0, trimLength - 3) + "..." : this.props.children.substring(0, trimLength);

        return (
            <div>
                <Modal
                    show={this.state.modalShown}
                    size="4xl"
                    onClose={this.changeModalState}
                >
                    <Modal.Header>
                        <p className="text-2xl text-maroon-200">{this.props.title}</p>
                        <p>by {this.props.author}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6 md:grid md:grid-cols-3 md:gap-5">
                            <img src={this.props.image}/>
                            <p className="leading-relaxed text-lg text-gray-500 dark:text-gray-400 md:col-span-2">
                                {trimmedString}
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.changeModalState} href={"/issues/" + this.props.year + "/" + this.props.id} color="light">
                            Open Page
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Card imgSrc={this.props.image} imgAlt={this.props.title}>
                    <h5 className="text-2xl font-bold tracking-tight text-maroon-200 dark:text-white">
                        {this.props.title}
                    </h5>
                    <div className="grid grid grid-cols-2">
                        <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                            by {this.props.author}
                        </h5>
                        <p className="text-sm text-gray-900 tracking-tight text-right">
                            {this.props.year}
                        </p>
                    </div>
                    <Badge color="light" size="sm">
                        {this.props.tag}
                    </Badge>
                    <button onClick={this.changeModalState} class="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-white bg-maroon-200 border-4 border-white rounded-lg hover:bg-maroon-200 hover:text-white hover:border-transparent focus:ring-4 focus:outline-none focus:ring-ghostly-black ">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </Card>
            </div>
        )
    }
}

export default ArticleDisplay;