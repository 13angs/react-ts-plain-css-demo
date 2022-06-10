import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardRoutes } from './routes/dashboard';
import PublicRoutes from './routes/publicRoutes';

// lazily import Pages
const Dashboard = React.lazy(() => import('./pages/dashboard/dashboard'));
const Blog = React.lazy(() => import('./pages/blog/admin.blog'));
const Pdf = React.lazy(() => import('./pages/pdf/pdf'));
const PdfDetail = React.lazy(() => import('./pages/pdf/detail.pdf'));

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path={DashboardRoutes.blog} element={<Blog />} />
          <Route path={DashboardRoutes.dashboard} element={<Dashboard />} />

          {/* public pages */}
          {/* if new page do not nest the route */}
          <Route path={`${PublicRoutes.pdf}/:pdfId`} element={<PdfDetail />} />
          <Route path={PublicRoutes.pdf} element={<Pdf />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
