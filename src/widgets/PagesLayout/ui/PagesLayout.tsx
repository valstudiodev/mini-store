import { Outlet } from "react-router";
import '../styles/pagesLayout.scss';
import { Title } from "@/shared/typography";

function PagesLayout(): React.JSX.Element {
  return (
    <>
      <Title
        as="h1"
        title="Pages layouts"
        className="text-center
        text-5xl"
      >
        Pages Layout
      </Title>

      <Outlet />
    </>
  );
}

export default PagesLayout;