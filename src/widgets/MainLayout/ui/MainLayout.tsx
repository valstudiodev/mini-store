import Page from "@/shared/primitives/Page/Page";
import Wrapper from "@/shared/primitives/Wrapper/Wrapper";
import { Outlet } from "react-router";
import Header from "../../Header/ui/Header";
// import Footer from "../../Footer/ui/Footer";
import '../styles/mainLayout.scss';
import Breadcrumbs from "@/shared/ui/Breadcrumbs/ui/Breadcrumbs";

function MainLayout(): React.JSX.Element {
  return (
    <Wrapper className="wrapper">
      <Header />
      <Page className="page">
        <Breadcrumbs />
        <Outlet />
      </Page>
      {/* <Footer /> */}
    </Wrapper>
  );
}

export default MainLayout;