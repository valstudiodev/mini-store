import '../styles/shop-filter.scss';
import { Title } from "@/shared/typography";
import ShopProducts from "@/widgets/Shop/ShopProducts/ui/ShopProducts";
import { useAppSelector } from "@/app/store/hooks";
import { selectProducts } from "@/entities/product/model/productSelector";
import { useState } from "react";
import { CategoryFilterType } from "@/features/shop/product-filter/model/product-filter.types";
import Container from "@/shared/primitives/Container/Container";
import ShopSidebar from "@/widgets/Shop/ShopSidebar/ui/ShopSidebar";
import { matchesPriceFilter } from "@/shared/lib/product/filterByPrice";

function ShopFilter(): React.JSX.Element {
  const classShopFilter = 'shop-filter'

  const products = useAppSelector(selectProducts)

  const [category, setCategory] = useState<CategoryFilterType>('all');
  const [tag, setTag] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchValue === '' || product.title
      .toLowerCase()
      .includes(searchValue.toLowerCase())

    const matchesCategory = category === 'all' || product.category === category

    const matchesTag = tag === '' || product.tags.includes(tag)

    const matchesBrand = brand === '' || product.brand === brand

    const matchesPrice = matchesPriceFilter(price, product.price)

    return matchesSearch && matchesCategory && matchesTag && matchesBrand && matchesPrice
  })

  const handleCategoryChange = (newCategory: CategoryFilterType): void => {
    setCategory(newCategory)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string): void => {
    setSearchValue(value)
    setCurrentPage(1)
  }

  const handleTagChange = (value: string): void => {
    setTag(value)
    setCurrentPage(1)
  }

  const handleBrandChange = (value: string): void => {
    setBrand(value)
    setCurrentPage(1)
  }

  const handlePriceChange = (value: string): void => {
    setPrice(value)
    setCurrentPage(1)
  }

  const itemsPerPage = 6

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  return (
    <div className={classShopFilter}>
      <div className={`${classShopFilter}__layout`}>
        <div className={`${classShopFilter}__items`}>
          <div className={`${classShopFilter}__header`}>
            <Title as="h1">
              Shop page
            </Title>
          </div>
          <ShopProducts
            className={`${classShopFilter}__products`}
            products={currentProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <ShopSidebar
          value={searchValue}
          category={category}
          tag={tag}
          brand={brand}
          price={price}
          onCategoryChange={handleCategoryChange}
          onSearch={handleSearchChange}
          onTagChange={handleTagChange}
          onBrandChange={handleBrandChange}
          onPriceChange={handlePriceChange}
          className={`${classShopFilter}__sidebar`}
        />
      </div>
    </div>
  );
}

export default ShopFilter;