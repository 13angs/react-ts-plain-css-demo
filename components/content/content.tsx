import * as React from 'react';

export interface contentProps {
  children?: React.ReactNode;
}
function Content(props: contentProps) {
  const { children } = props;
  return (
    <div className="ml-86 mt-20 mr-3 max-w-full py-1">
      {/**
       * Be aware when using text
       * make sure it not connected
       */}
      {children}
    </div>
  );
}

export default Content;
