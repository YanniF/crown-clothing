import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles.jsx";

export const buttonTypeClasses = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};


export const buttonTypeMap = {
  [buttonTypeClasses.base]: BaseButton,
  [buttonTypeClasses.google]: GoogleSignInButton,
  [buttonTypeClasses.inverted]: InvertedButton,
}