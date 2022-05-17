import * as React from 'react';
import Layout from '../../components/layout/layout';

export interface dashboardProps {
  children?: React.ReactNode;
}

export default function Dashboard(props: dashboardProps) {
  return <Layout>{/* <div>I'm from dashboard</div> */}</Layout>;
}
