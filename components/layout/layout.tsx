import * as React from 'react';
import Content from '../content/content';
import Drawer from '../drawer/drawer';
import NavBar from '../navbar/navbar';

export interface layoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: layoutProps) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      <Drawer />
      <Content>{children}</Content>
    </div>
  );
}
