import { LucideIcon } from "lucide-react";

export interface AdvantageItem {
  icon?: LucideIcon;
  title?: string;
  text?: string;
}

export interface AdvantagesItemsProps {
  items: AdvantageItem[]
}

export interface AdvantageItemProps {
  item: AdvantageItem
}