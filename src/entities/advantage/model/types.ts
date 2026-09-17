import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

type IconProp = ComponentType<LucideIcon>

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