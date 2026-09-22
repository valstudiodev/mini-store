import { InputHTMLAttributes } from "react";

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: string;
  onClear?: () => void;
  label?: string;
  onSearch?: (value: string) => void;
}