export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface BreadcrumbMeta {
  title?: string;
  breadcrumbLabel?: string;
  breadcrumbs?: boolean;
}

export interface UseBreadcrumbsOptions {
  showOnHome?: boolean;
  mode?: 'all' | 'last';
  homeLabel?: string;
}