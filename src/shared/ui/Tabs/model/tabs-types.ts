import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: TabsContentBlock[];
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveId?: string;
}

export interface TabsTitleBlock {
  type: 'title';
  title: string;
}

export interface TabsParagraphBlock {
  type: 'paragraph';
  paragraph?: string;
}

export interface TabsListBlock {
  type: 'list',
  text?: string;
  list?: string[]
}

export type TabsContentBlock =
  | TabsTitleBlock
  | TabsParagraphBlock
  | TabsListBlock

export interface TabsContentProps {
  content: TabsContentBlock[]
}