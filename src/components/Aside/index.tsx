import React from "react";
import {
  MdDashboard,
  MdBusiness,
  MdOutlineAssessment,
  MdExitToApp,
} from "react-icons/md";
import logoImg from "../../assets/logoImg.svg";
import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Da Empresa" />
      </Header>

      <MenuContainer>
        
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdBusiness />
          Empresas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdOutlineAssessment />
          Avaliações
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>

      </MenuContainer>
    </Container>
  );
};

export default Aside;
