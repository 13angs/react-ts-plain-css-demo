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
    file: {
      download:
        'https://drive.google.com/uc?id=11YNhN4OKFnzSD5uscMCNlxhWpv7-n9Da&export=download',
      preview:
        'https://drive.google.com/file/d/11YNhN4OKFnzSD5uscMCNlxhWpv7-n9Da/preview',
    },
    name: 'Automate the boring stuff using python',
  },
  {
    file: {
      download:
        'https://drive.google.com/uc?id=1eVeihZT7iBVGbo_RHfEmmlhzhlVvzN3F&export=download',
      preview:
        'https://drive.google.com/file/d/1eVeihZT7iBVGbo_RHfEmmlhzhlVvzN3F/preview',
    },
    name: 'ReactJs with Redux',
  },
];

export default function PdfDetail(props: pdfDetailProps) {
  const [loading, setLoading] = React.useState(true);
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
      <h1 className="text-xl font-bold text-center">
        <a href={pdf.file.download} download>
          {pdf.name}
        </a>
      </h1>
      <div className="flex justify-center p-3 drop-shadow-md">
        <iframe
          onLoadedData={() => setLoading(false)}
          style={loading ? { display: 'hidden' } : { display: 'f' }}
          src={pdf.file.preview}
          // className="h-full"
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
