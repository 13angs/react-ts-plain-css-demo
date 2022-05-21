import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardRoutes from './routes/dashboard';

// lazily import Pages
const Dashboard = React.lazy(() => import('./pages/dashboard/dashboard'));
const Blog = React.lazy(() => import('./pages/blog/blog'));

export default function App() {
  const routes = new DashboardRoutes();
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
