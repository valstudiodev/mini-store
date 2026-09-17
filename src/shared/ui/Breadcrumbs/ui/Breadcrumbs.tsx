import { useMatch } from 'react-router';
import '../styles/breadcrumbs.scss';
import { BreadcrumbsProps } from '../model/types';

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  showOnHome: false,
  mode: 'all',
  homeLabel: 'Home',
});

function Breadcrumbs(): React.JSX.Element {
  const breadcrumbs = 'breadcrumbs'

  const matches = useMatch()

  const currentNatch = matches[matches]

  return (
    <nav className={breadcrumbs}>

    </nav>
  );
}

export default Breadcrumbs;