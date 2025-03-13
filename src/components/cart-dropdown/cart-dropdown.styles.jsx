import styled from 'styled-components';
import Button from "../button/button.component.jsx";
import {BaseButton, GoogleSignInButton, InvertedButton} from "../button/button.styles.jsx";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 5.625rem;
  right: 2.5rem;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 21.25rem;
  padding: 1.25rem;
  border: 1px solid black;
  background-color: white;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.p`
  margin: 3.125rem auto;
  font-size: 1.25rem;
`

export const CartItems = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    border-radius: 0.625rem;
    background-color: #eee;
  }

  &::-webkit-scrollbar {
    width: 0.75rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    -webkit-box-shadow: none;
    background-color: #111;
  }
`
