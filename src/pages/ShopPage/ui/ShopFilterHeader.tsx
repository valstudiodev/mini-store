import '../styles/shop-filterHeader.scss';
interface ShopFilterHeaderProps {
  firstItem: number;
  lastItem: number;
  totalResults: number;
}

function ShopFilterHeader({
  firstItem,
  lastItem,
  totalResults
}: ShopFilterHeaderProps): React.JSX.Element {
  const shopFilterHeader = 'shop-filter-header'

  return (
    <div className={shopFilterHeader}>
      <p className={`${shopFilterHeader}__result`}>
        <span>Showing</span>
        <span>{firstItem}</span> - <span>{lastItem}</span>
        <span>of</span>
        <span>{totalResults}</span>
        {totalResults > 10 ? (<span>results</span>) : (<span>result</span>)}
      </p>

    </div>
  );
}

export default ShopFilterHeader;