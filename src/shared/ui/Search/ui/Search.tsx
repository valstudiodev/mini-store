import {
  ChangeEvent,
  useEffect,
  useId,
  useState,
  useRef
} from "react";
import { SearchProps } from "../model/types";

export default function Search({
  value = '',
  placeholder = 'Search...',
  debounceTime = 300,
  disabled = false,
  label = 'Search',
  onChange,
  onClear,
  ...props
}: SearchProps): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>(value);
  const inputId = useId()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  useEffect(() => {
    setSearchTerm(value)
  }, [value]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchTerm !== value) {
        onChange(searchTerm)
      }
    }, debounceTime);

    return () => window.clearTimeout(timer)
  }, [searchTerm, debounceTime, onChange, value]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  function handleClear(): void {
    setSearchTerm('')
    onChange('')
    onClear?.()
  }

  return (
    <div className={`search ${disabled ? 'search--disabled' : ''}`}>
      <label
        htmlFor={inputId}
        className="search__label mb-2"
        aria-hidden="true">
        {label}
      </label>

      <div className="search__wrapper flex items-center
      gap-2">
        <span
          className="search__icon"
          aria-hidden="true"
        >
          🔍
        </span>

        <input
          {...props}
          id={inputId}
          type="search"
          className="search__input border w-full"
          value={searchTerm}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
        />

        {searchTerm && !disabled && (
          <button
            type="button"
            className="search__btn-clear"
            aria-label="Clear search"
            onClick={handleClear}>
            {/* &times; */}
          </button>
        )}
      </div>



    </div>
  )
}