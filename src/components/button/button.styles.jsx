import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 10.3125rem;
  width: auto;
  height: 3.125rem;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 2.1875rem 0 2.1875rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .6;

    &:hover {
      background-color: #000;
      color: #fff;
      border: none;
    }
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .6;

    &:hover {
      background-color: #4285f4;
      color: #fff;
    }
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`
