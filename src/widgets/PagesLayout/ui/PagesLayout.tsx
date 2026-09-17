import { Link, Outlet } from "react-router";
import '../styles/pagesLayout.scss';
import { routeMap } from "@/app/routes/routeMap";

function PagesLayout(): React.JSX.Element {
  return (
    <>
      <h1 className="text-center">Pages layouts</h1>
      <Link to={`${routeMap.cart.path}`}>
        Go to cart page
      </Link>
      <Link to='checkout'>
        Go to checkout page
      </Link>
      <Outlet />
    </>
  );
}

export default PagesLayout;