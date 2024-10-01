import './button.styles.scss';

const Button = ({ children, buttonType = '', disabled = false, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonType}`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
