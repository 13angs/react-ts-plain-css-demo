import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface cardProps {
  navigateTo: string;
}

export default function Card(props: cardProps) {
  const navigate = useNavigate();
  const { navigateTo } = props;
  return (
    <div
      className="w-60 h-80 rounded-xl drop-shadow-md bg-white cursor-pointer"
      onClick={() => navigate(navigateTo)}
    >
      {/* top container */}
      <div className="w-full h-50 bg-indigo-600 rounded-t-xl relative">
        <div className="w-15 h-15 bg-slate-200 absolute -bottom-5 right-5 rounded-full"></div>
      </div>

      {/* bottom container */}
      <div className="w-full h-30 rounded-b-xl text-center">
        <p className="text-lg font-bold">Title here</p>
        <p>Description here</p>
      </div>
    </div>
  );
}
