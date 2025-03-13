import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.header`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.625rem;
  padding: 0 2.5rem;
`

export const LogoContainer = styled(Link) `
  height: 100%;
  width: 4.375rem;
  padding: 1.5625rem;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

export const NavLink = styled(Link)`
  padding: 0.625rem 1rem;
`;

export const NavButton = styled.button`
  padding: 0.625rem 1rem;
  cursor: pointer;
`;