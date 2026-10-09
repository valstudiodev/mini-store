import useTheme from "@/app/providers/theme/useTheme";
import '../styles/styles.scss';

interface ThemeToggleProps {
  title: string;
  className?: string;
  children: React.ReactNode
}

function ThemeToggle({
  title,
  className = '',
  children,
  ...props
}: ThemeToggleProps): React.JSX.Element {
  const { state, dispatch } = useTheme()

  console.log('---Theme toggle---', state.theme);

  return (
    <button
      {...props}
      type="button"
      className={`theme-toggle ${className}`}
      title={title}
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
    >
      {children}
    </button>
  );
}

export default ThemeToggle;