import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageurl}) => `url(${imageurl})`}
`

export const Body = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5.625rem;
  padding: 0 1.5625rem;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;

  h2 {
    margin: 0 6px 0;
    font-weight: bold;
    font-size: 1.375rem;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 1rem;
  }
`

export const DirectoryItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  overflow: hidden;
  min-width: 30%;
  height: 15rem;
  margin: 0 0.5rem 1rem;
  border: 1px solid black;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &:first-child {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin-left: 0.5rem;
    }
  }
`
