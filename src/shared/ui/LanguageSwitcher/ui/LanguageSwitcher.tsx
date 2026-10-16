import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import '../styles/language-switcher.scss';

type LanguageType = 'en' | 'uk'

interface LanguageSwitcherProps {
  className?: string;
}

function LanguageSwitcher({
  className = ''
}: LanguageSwitcherProps): React.JSX.Element {
  const languageSwitcher = 'language-switcher'

  const { i18n } = useTranslation()

  const currentLanguage = i18n.language

  const onChangeLanguage = (lang: LanguageType): void => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={`${languageSwitcher} ${className}`}>
      <select
        name="language"
        id="language-switcher"
        value={currentLanguage}
        onChange={(e) => onChangeLanguage(e.target.value as LanguageType)}
        className={`${languageSwitcher}__select`}
      >
        <option value='en'>EN</option>
        <option value='uk'>UK</option>
      </select>
      <ChevronDown
        className={`${languageSwitcher}__chevron`}
        size={14}
        aria-hidden="true"
      />
    </div>
  );
}

export default LanguageSwitcher;