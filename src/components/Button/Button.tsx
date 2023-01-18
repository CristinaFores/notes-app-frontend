interface ButtonProps {
  text?: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  action,
  ariaLabel,
  onSubmit,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={action}
      aria-label={ariaLabel}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
};

export default Button;
