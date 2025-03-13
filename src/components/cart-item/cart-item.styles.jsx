import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 0.9375rem;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  padding: 0.625rem 1.25rem;

  span {
    font-size: 1rem;
  }
`;