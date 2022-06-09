interface Routes {
  dashboard: string;
  blog: string;
}

interface PublicRoutes {
  landing: string;
}

const dashboard = '/dashboard';

const DashboardRoutes: Routes = {
  dashboard,
  blog: `${dashboard}/blogs`,
};

const routes: PublicRoutes = {
  landing: '/',
};

export { DashboardRoutes };
