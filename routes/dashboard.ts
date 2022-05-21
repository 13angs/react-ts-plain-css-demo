abstract class RouteAbs {
  abstract dashboard: string;
  abstract blog: string;
}

export default class DashboardRoutes extends RouteAbs {
  dashboard = '/';
  blog = '/blogs';
}
