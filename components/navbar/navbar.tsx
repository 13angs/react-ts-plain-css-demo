import * as React from 'react';

export interface navBarProps {}

function NavBar(props: navBarProps) {
  return (
    <div className="fixed right-3 top-3 left-86">
      <nav className="h-16 bg-white rounded-xl drop-shadow-md"></nav>
    </div>
  );
}

export default NavBar;
