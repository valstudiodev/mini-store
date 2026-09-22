import '../styles/product-filter.scss';
import { productFilterConfig, ProductFilterProps } from "../model/product-filter.types";
import FilterSection from './FilterSection';


function ProductFilter({
  category,
  tag,
  brand,
  price,

  onTagChange,
  onBrandChange,
  onPriceChange,
  onCategoryChange,
}: ProductFilterProps): React.JSX.Element {
  const productFilter = 'product-filter';

  return (

    <div className={productFilter}>
      {productFilterConfig.map((section) => {

        if (section.title === 'category') {
          return (
            <FilterSection
              key={section.title}
              title={section.title}>

              <ul className={`${productFilter}__list`}>

                {section.options.map((option) => {

                  const className = category === option ? 'active' : ''

                  return (
                    <li
                      className={`${productFilter}__item`}
                      key={option}>

                      <button
                        type='button'
                        className={`${productFilter}__btn ${className}`}
                        onClick={() => onCategoryChange(option)}
                        aria-pressed={category === option}
                      >
                        {option}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </FilterSection>
          )
        }

        if (section.title === 'tags') {
          return (
            <FilterSection
              key={section.title}
              title={section.title}>
              <ul className={`${productFilter}__list`}>
                {section.options.map((option) => {

                  const className = tag === option ? 'active' : ''

                  return (
                    <li className={`${productFilter}__item`}
                      key={option}>
                      <button
                        type='button'
                        className={`${productFilter}__btn ${className}`}
                        onClick={() => onTagChange(option)}
                        aria-pressed={tag === option}
                      >
                        {option}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </FilterSection>
          )
        }

        if (section.title === 'brands') {
          return (
            <FilterSection
              key={section.title}
              title={section.title}>
              <ul className={`${productFilter}__list`}>
                {section.options.map((option) => {

                  const className = brand === option ? 'active' : ''

                  return (
                    <li className={`${productFilter}__item`}
                      key={option}>
                      <button
                        type='button'
                        className={`${productFilter}__btn ${className}`}
                        onClick={() => onBrandChange(option)}
                        aria-pressed={brand === option}
                      >
                        {option}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </FilterSection>
          )
        }

        if (section.title === 'filter by price') {
          return (
            <FilterSection
              key={section.title}
              title={section.title}>
              <ul className={`${productFilter}__list`}>
                {section.options.map((option) => {

                  const className = price === option ? 'active' : ''

                  return (
                    <li className={`${productFilter}__item`}
                      key={option}>
                      <button
                        type='button'
                        className={`${productFilter}__btn ${className}`}
                        onClick={() => onPriceChange(option)}
                        aria-pressed={price === option}
                      >
                        {option}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </FilterSection>
          )
        }

        return null
      })}
    </div >
  );
}

export default ProductFilter;


