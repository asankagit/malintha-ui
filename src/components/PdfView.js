import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios'
export class PdfView extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  anotherway() {
    axios('https://www.ft.dk/samling/20061/almdel/uvt/bilag/169/376199.pdf..', {
      method: 'GET',
      responseType: 'blob' //Force to receive data in a Blob Format
      ,
      crossdomain: true
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob(
          [response.data],
          { type: 'application/pdf' });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(">>>",error);
      });
  }



  render() {
    const { pageNumber, numPages } = this.state;
    this.anotherway();
    return (
      <div>
        <Document
          file='https://www.ft.dk/samling/20061/almdel/uvt/bilag/169/376199.pdf'
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

/*export const PdfView = (props) => {

    const { pageNumber, numPages } = props;

    return (
        <div>
        <Document
          file= {props.url} 
        //   onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
}*/