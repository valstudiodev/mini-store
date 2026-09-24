import { Params, RouteObject } from "react-router";

export interface RouteMeta {
  isInMenu?: boolean;
  title: string | ((params: Params) => string);
  breadcrumb?: string | ((params: Params) => string);
}

export type AppRoute = RouteObject & {
  id?: string;
  meta?: RouteMeta;
  children?: AppRoute[];
};

export type AppRouteObject = RouteObject & {
  handle?: {
    meta?: RouteMeta;
  };
  children?: AppRouteObject[];
};

export type MenuRoute = {
  id?: string;
  index?: boolean;
  path?: string;
  meta?: {
    isInMenu?: boolean;
    title?: string;
  };
};


// export interface AppRouteObject {
//   path?: string;
//   element?: React.ReactNode;
//   children?: AppRouteObject[];
//   handle?: {
//     meta?: RouteMeta;
//   };
// }