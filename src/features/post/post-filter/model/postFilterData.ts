import { PostFilter } from "@/entities/post/model/post-types";

interface PpostFilterProps {
  value: PostFilter;
  label: string;
}

export const postFilterCategories: PpostFilterProps[] = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'news',
    label: 'News'
  },
  {
    value: 'latest',
    label: 'Latest'
  },
  {
    value: 'technology',
    label: 'Technology'
  },
  {
    value: 'gadgets',
    label: 'Gadgets'
  },
  {
    value: 'camera',
    label: 'Camera'
  },
  {
    value: 'related',
    label: 'Related'
  }
]