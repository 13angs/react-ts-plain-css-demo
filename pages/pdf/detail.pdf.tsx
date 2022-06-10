import * as React from 'react';
import { useParams } from 'react-router-dom';
// import './pdf.css';

//PDFjs worker from an external cdn
// https://www.youtube.com/watch?v=lJ4Gvm4YTKo
// open the pdf from google drive in new tab
// copy the embeded

interface pdfDetailProps {
  pdfName: string;
  file: string;
}

const pdfs = [
  {
    file: 'https://drive.google.com/file/d/11YNhN4OKFnzSD5uscMCNlxhWpv7-n9Da/preview',
    name: 'Automate the boring stuff using python',
  },
  {
    file: 'https://drive.google.com/file/d/1eVeihZT7iBVGbo_RHfEmmlhzhlVvzN3F/preview',
    name: 'ReactJs with Redux',
  },
];

export default function PdfDetail(props: pdfDetailProps) {
  // const { pdfName, file } = props;
  const { pdfId } = useParams();
  const [pdf, setPdf] = React.useState(null);

  React.useEffect(() => {
    setPdf(pdfs.find((item, ind) => ind === parseInt(pdfId) && item));
  }, [pdfId]);

  if (pdf === null) {
    return null;
  }

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-center">{pdf.name}</h1>
      <div className="flex justify-center p-3 drop-shadow-md">
        <iframe
          src={pdf.file}
          width="1280"
          height="724"
          allow="autoplay"
          // style={{border: 0}}
          frameBorder="0"
          // scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
