import { routeMap } from "@/app/routes/routeMap";
import LinkBase from "@/shared/ui/LinkBase/ui/LinkBase";
import './logoStyles.scss';

interface LogoProps {
  className?: string
}

function Logo({
  className = ''
}: LogoProps): React.JSX.Element {
  const clLogo = 'logo'
  return (
    <LinkBase
      className={`${clLogo} ${className}`}
      to={`${routeMap.home.path}`}
    >
      MiniStore
      <span>.</span>
    </LinkBase>
  );
}

export default Logo;