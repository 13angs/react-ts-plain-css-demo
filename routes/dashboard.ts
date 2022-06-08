interface Routes {
  dashboard: string;
  blog: string;
}

const dashboard = '/dashboard';

const DashboardRoutes: Routes = {
  dashboard,
  blog: `${dashboard}/blogs`,
};

export default DashboardRoutes;
