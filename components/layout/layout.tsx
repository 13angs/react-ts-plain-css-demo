import * as React from 'react';
import Drawer from '../drawer/drawer';

export interface layoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: layoutProps) {
  const { children } = props;
  return (
    <div>
      <Drawer />
      {children}
    </div>
  );
}
