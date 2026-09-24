import Page from "@/shared/primitives/Page/Page";
import Wrapper from "@/shared/primitives/Wrapper/Wrapper";
import { Outlet } from "react-router";
import Header from "../../Header/ui/Header";
import '../styles/mainLayout.scss';
import Breadcrumbs from "@/shared/ui/Breadcrumbs/ui/Breadcrumbs";
import Footer from "@/widgets/Footer/ui/Footer";
import { ScrollToTop } from "@/shared/lib/scrollToTop/scrollToTop";

function MainLayout(): React.JSX.Element {
  return (
    <Wrapper className="wrapper">
      <ScrollToTop />
      <Header />
      <Page className="page">
        <Breadcrumbs />
        <Outlet />
      </Page>
      <Footer />
    </Wrapper>
  );
}

export default MainLayout;