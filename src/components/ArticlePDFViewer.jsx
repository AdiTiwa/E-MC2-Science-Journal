import React, { Component } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

export default class ArticlePDF extends Component {

    constructor(props) {
        super(props)
        this.state = { numPages: null, pageNumber: 1, scale: 1.5 }
    }

    componentDidMount() {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages: numPages })
    }

    goToPreviousPage = () => {
        var newPage = 0

        if (this.state.pageNumber - 1 <= 1) {
            newPage = 1
        } else {
            newPage = this.state.pageNumber - 1
        }
        this.setState({ pageNumber: newPage })
    }

    goToNextPage = () => {
        var newPage = 0
        if (this.state.pageNumber + 1 >= this.state.numPages) {
            newPage = this.state.numPages
        } else {
            newPage = this.state.pageNumber + 1  
        }

        this.setState({ pageNumber: newPage })
    }

    render() {
        return (
            <div className = "px-10 pb-48 md:px-28 lg:px-96 flex-items-stretch pt-24">
                <nav className='grid grid-cols-3 content-around'>
                    <button onClick = {this.goToPreviousPage}>←</button>
                    <p className = "pl-48">{this.state.pageNumber} or {this.state.numPages}</p>
                    <button onClick = {this.goToNextPage}>→</button>
                </nav>

                <div className = "self-stretch">
                    <Document file="../../../pdf/issues/2021/nallamalli_s.pdf" onLoadSuccess={this.onDocumentLoad}>
                        <Page pageNumber={this.state.pageNumber} scale={this.state.scale} />
                    </Document>
                </div>
            </div>
        )
    }
}