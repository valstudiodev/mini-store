import { Title } from '@/shared/typography';
import '../styles/headline.scss';
import { LinkBase } from '@/shared/ui';

interface HeadlineProps {
  className?: string;
  title: string;
  to?: string;
  linkLabel?: string;
}

function Headline({
  title,
  to,
  linkLabel,
  className = '',
}: HeadlineProps): React.JSX.Element | null {
  const headline = 'headline'

  return (
    <div className={`${headline} ${className}`}>
      <Title
        className={`${headline}__title`}
        as='h2'>
        {title}
      </Title>
      {to && (
        <LinkBase
          className={`${headline}__link`}
          to={to}>
          {linkLabel}
        </LinkBase>
      )}
    </div>
  );
}

export default Headline;