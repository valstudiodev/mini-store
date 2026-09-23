import { Outlet } from "react-router";
import '../styles/pagesLayout.scss';

function PagesLayout(): React.JSX.Element {
  return (
    <>
      <Outlet />
    </>
  );
}

export default PagesLayout;