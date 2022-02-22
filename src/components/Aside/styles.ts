import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};

  border-right: 1px solid ${(props) => props.theme.colors.gray};

  position: relative;

  @media (max-width: 600px) {
    padding-left: 20px;
    position: fixed;
    z-index: 2;

    width: 170px;

    
    overflow: hidden;

    
  }
`;

export const Header = styled.header`

  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const LogoImg = styled.img`
  height: 100px;
  width: 100px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  padding-left: 20px;
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.green};
  text-decoration: none;

  margin: 7px 0;
  display: flex;
  align-items: center;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;
