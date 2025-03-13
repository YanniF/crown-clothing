import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -0.875rem;
  font-size: 0.75rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  position: absolute;
  left: 0.3125rem;
  top: 0.625rem;
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  pointer-events: none;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: 1.5625rem 0;
  padding: 0.625rem 0.625rem 0.625rem 0.3125rem;
  background-color: white;
  color: ${subColor};
  font-size: 1.125rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.8125rem 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;