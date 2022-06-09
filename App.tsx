import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardRoutes } from './routes/dashboard';

// lazily import Pages
const Dashboard = React.lazy(() => import('./pages/dashboard/dashboard'));
const Blog = React.lazy(() => import('./pages/blog/admin.blog'));

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path={DashboardRoutes.blog} element={<Blog />} />
          <Route path={DashboardRoutes.dashboard} element={<Dashboard />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
