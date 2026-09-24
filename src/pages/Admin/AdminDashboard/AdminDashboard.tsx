import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import { Title } from "@/shared/typography";
import './admin-dashboard.scss';

function AdminDashboard({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminDashboard = 'admin-dashboard'

  return (
    <Section className={`${adminDashboard} ${className}`}>
      <Container className={`${adminDashboard}__container`}>
        <Title className="text-center text-5xl">
          Admin dashboard
        </Title>

      </Container>
    </Section>
  );
}

export default AdminDashboard;