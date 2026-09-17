import Container from '@/shared/primitives/Container/Container';
import '../styles/header.scss';
import MainMenu from '@/widgets/MainMenu/ui/MainMenu';

function Header(): React.JSX.Element {
  const classHeader = 'header'

  return (
    <header className={classHeader}>
      <Container className={`${classHeader}__container`}>
        <MainMenu className={`${classHeader}__menu`} />
      </Container>
    </header>
  );
}

export default Header;