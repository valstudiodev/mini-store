import { Search, X } from "lucide-react";
import '../styles/search.scss';

import {
  ChangeEvent,
  useEffect,
  useId,
  useState,
} from "react";
import { SearchProps } from "../model/types";

export default function SearchInput({
  value = '',
  placeholder = 'Search',
  disabled = false,
  label = 'Search',
  onClear,
  onSearch,
  ...props
}: SearchProps): React.JSX.Element {
  const search = 'search'

  const [searchTerm, setSearchTerm] = useState<string>(value);
  const inputId = useId()

  useEffect(() => {
    setSearchTerm(value)
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = (): void => {
    onSearch?.(searchTerm)
  }

  const handleClear = (): void => {
    setSearchTerm('')
    onClear?.()
    onSearch?.('')
  }

  return (
    <div className={`${search} search ${disabled ? 'search--disabled' : ''}`}>
      <div className={`${search}__inner`}>
        <input
          {...props}
          id={inputId}
          type="search"
          className={`${search}__input`}
          value={searchTerm}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={handleSearch}
          className={`${search}__btn`}
        >
          <Search
            className={`${search}__icon`}
            size={21} />
        </button>

        {searchTerm && !disabled && (
          <button
            type="button"
            className='btn-clear'
            aria-label="Clear search"
            onClick={handleClear}>
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )
}