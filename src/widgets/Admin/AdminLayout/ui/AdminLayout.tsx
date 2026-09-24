import Page from "@/shared/primitives/Page/Page";
import Wrapper from "@/shared/primitives/Wrapper/Wrapper";
import { Outlet } from "react-router";
import AdminHeader from "../../AdminHeader/ui/AdminHeader";
import AdminNavigation from "../../AdminNavigation/ui/AdminNavigation";
import Container from "@/shared/primitives/Container/Container";
import '../styles/admin-layout.scss';

function AdminLayout(): React.JSX.Element {
  const adminLayout = 'admin-layout'

  return (
    <Wrapper className={`wrapper ${adminLayout}`}>
      <Page className={`${adminLayout}__page`}>
        <AdminHeader />
        <Container className={`${adminLayout}__container`}>
          <AdminNavigation />
          <Outlet />
        </Container>
      </Page>
    </Wrapper>
  );
}

export default AdminLayout;