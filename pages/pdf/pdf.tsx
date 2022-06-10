import * as React from 'react';
import Card from '../../components/card/card';
import PublicRoutes from '../../routes/publicRoutes';

interface pdfProps {}

export default function Pdf(props: pdfProps) {
  return (
    <div className="w-80pct m-auto">
      <h1>PDF Page</h1>

      {/* CARD CONTAINER */}
      <div className="flex gap-3 p-2">
        {[0, 1].map((item) => (
          <Card navigateTo={`${PublicRoutes.pdf}/${item}`} />
        ))}
      </div>
    </div>
  );
}
