import * as React from 'react';
import './drawer.module.css';
import { useNavigate } from 'react-router-dom';
import DashboardRoutes from '../../routes/dashboard';

export interface drawerProps {
  children?: React.ReactNode;
}

export interface classes {
  icon?: string;
}

export interface drawerMenuProps {
  path: string;
  name: string;
  classes?: classes;
}

export interface menuIconProps {
  className: string;
  icon: React.FunctionComponent;
}

export function DashboardIcon() {
  return (
    <React.Fragment>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      />
    </React.Fragment>
  );
}

export function MenuIcon(props: menuIconProps) {
  const { className, icon } = props;
  const Component = icon;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <Component />
    </svg>
  );
}

export function DrawerMenu(props: drawerMenuProps) {
  const { path, name, classes } = props;

  // to avoid Cannot destructure property 'icon' of 'classes' as it is undefined.
  const { icon } = classes || { icon: '' };
  const navigate = useNavigate();
  return (
    <div
      tabIndex={0}
      className="h-12 bg-slate-100 rounded-xl mt-2 flex px-2 items-center gap-1 group transition ease-in-out"
      onClick={() => navigate(path)}
    >
      <MenuIcon
        className={icon || 'h-8 w-8 stroke-slate-600'}
        icon={DashboardIcon}
      />
      <p className="text-xl text-slate-600 font-semibold">{name}</p>
    </div>
  );
}

export default function Drawer(props: drawerProps) {
  return (
    <div className="fixed top-3 left-3 w-80 h-full rounded-xl">
      {/**
       * Avoid using full-width/margin if use fixed position
       * Try using top left bottom right instread
       */}

      <div className="h-full bg-white drop-shadow-md rounded-xl p-3 max-w-full">
        <div className="w-full h-20 bg-slate-100 rounded-xl"></div>
        <div className="border-slate-100 border-solid border-01 flex grow my-2" />
        {/* don't use full width when using padding */}
        <DrawerMenu
          path={DashboardRoutes.dashboard}
          name="Dashboard"
          classes={{
            icon: 'h-8 w-8 stroke-slate-600',
          }}
        />
        <DrawerMenu path={DashboardRoutes.blog} name="Blogs" />
      </div>
    </div>
  );
}
