// import { LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface AdvantageItem {
  icon?: string;
  title?: string;
  text?: string;
}
export interface AdvantageItemProps {
  item: AdvantageItem
}
export interface AdvantagesItemsProps {
  items: AdvantageItem[]
}

