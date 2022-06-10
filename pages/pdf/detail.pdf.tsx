import * as React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import './pdf.css';

//PDFjs worker from an external cdn
const url =
  'https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf';

export default function PdfDetail() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {}
  return (
    <div className="main">
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page />
      </Document>
    </div>
  );
}
