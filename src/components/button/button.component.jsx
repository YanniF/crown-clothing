import {buttonTypeClasses, buttonTypeMap} from "./button.type.js";

const Button = ({ children, buttonType = buttonTypeClasses.base, disabled = false, ...otherProps }) => {
  const CustomButton = buttonTypeMap[buttonType];

  return (
    <CustomButton
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
