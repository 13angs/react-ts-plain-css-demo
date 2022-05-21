import * as React from 'react';
import Layout from '../../components/layout/layout';

export interface dashboardProps {
  children?: React.ReactNode;
}

export default function Dashboard(props: dashboardProps) {
  return (
    <Layout>
      {/**
       * grid-rows means how many row should the children construct
       */}
      <div className="grid grid-rows-1 grid-flow-col gap-2 mb-2">
        <div className="h-40 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-40 bg-white drop-shadow-md rounded-xl"></div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-2 mb-2">
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-2 mb-2">
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-2 mb-2">
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-2 mb-2">
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
        <div className="h-20 bg-white drop-shadow-md rounded-xl"></div>
      </div>
    </Layout>
  );
}
