import { RouteObject } from "react-router";

export interface MainMenuProps {
  className?: string;
}

export interface RouteMeta {
  isInMenu?: boolean;
  title?: string;
  breadcrumb?: string;
}

export type CustomRouteObject = Omit<RouteObject, 'children'> & {
  handle?: {
    meta?: RouteMeta;
  };
  meta?: RouteMeta;
  children?: CustomRouteObject[];
};

