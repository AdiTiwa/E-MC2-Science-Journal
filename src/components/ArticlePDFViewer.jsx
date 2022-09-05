import React, { Component } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

export default class ArticlePDF extends Component {

    constructor(props) {
        super(props)
        this.state = { numPages: null, pageNumber: 1, scale: 0.75, pdfMargin: "" }
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
            <div className = "flex-items-stretch">
                <nav className='grid grid-cols-3 place-content-center px-10 md:px-28 lg:px-48 pt-24'>
                    <button onClick = {this.goToPreviousPage}>←</button>
                    <p className = "text-center">{this.state.pageNumber} of {this.state.numPages}</p>
                    <button onClick = {this.goToNextPage}>→</button>
                </nav>

                <div className= "self-stretch px-5 md:px-28 lg:px-36 xl:px-96">
                    <Document file="../../../pdf/issues/2021/nallamalli_s.pdf" onLoadSuccess={this.onDocumentLoad} className={this.state.pdfMargin + "visible md:invisible absolute"}>
                        <Page pageNumber={this.state.pageNumber} scale="0.7" />
                    </Document>
                    <Document file="../../../pdf/issues/2021/nallamalli_s.pdf" onLoadSuccess={this.onDocumentLoad} className={this.state.pdfMargin + "invisible md:visible lg:invisible absolute"}>
                        <Page pageNumber={this.state.pageNumber} scale="1" />
                    </Document>
                    <Document file="../../../pdf/issues/2021/nallamalli_s.pdf" onLoadSuccess={this.onDocumentLoad} className={this.state.pdfMargin + "invisible lg:visible absolute"}>
                        <Page pageNumber={this.state.pageNumber} scale="1.6" />
                    </Document>
                </div>
            </div>
        )
    }
}