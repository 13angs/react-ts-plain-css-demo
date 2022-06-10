import * as React from 'react';
import Card from '../../components/card/card';
import PublicRoutes from '../../routes/publicRoutes';

interface pdfProps {}

export default function Pdf(props: pdfProps) {
  const pdfs = [
    {
      file: 'https://drive.google.com/file/d/11YNhN4OKFnzSD5uscMCNlxhWpv7-n9Da/view',
      name: 'Automate the boring stuff using python',
    },
    {
      file: 'https://drive.google.com/file/d/1eVeihZT7iBVGbo_RHfEmmlhzhlVvzN3F/view',
      name: 'ReactJs with Redux',
    },
  ];
  return (
    <div className="w-80pct m-auto">
      <h1>PDF Page</h1>

      {/* CARD CONTAINER */}
      <div className="flex gap-3 p-2">
        {pdfs.map((item, ind) => (
          <Card key={ind} navigateTo={`${PublicRoutes.pdf}/${ind}`} />
        ))}
      </div>
    </div>
  );
}
