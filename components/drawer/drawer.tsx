import * as React from 'react';
import './drawer.module.css';

export interface drawerProps {
  children?: React.ReactNode;
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
        <div
          tabIndex={0}
          className="h-12 bg-slate-100 rounded-xl mt-2 flex px-2 items-center gap-1 group transition ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
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
          </svg>

          <p className="text-xl text-slate-600 font-semibold">Dashboard</p>
        </div>

        <div
          tabIndex={1}
          className="h-12 bg-slate-100 rounded-xl mt-2 flex px-2 items-center gap-1 group transition ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
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
          </svg>

          <p className="text-xl text-slate-600 font-semibold">Dashboard</p>
        </div>
      </div>
    </div>
  );
}
