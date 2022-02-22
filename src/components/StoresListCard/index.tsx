import React from "react";
import InputCheckbox from "../InputCheckbox";

import { CnpjName, Container } from "./styles";

interface IStoresListCardProps {
  cnpj: string;
  name: string;
  domain: string;
  active: boolean;
}

const StoresListCard: React.FC<IStoresListCardProps> = ({
  cnpj,
  name,
  domain,
  active
}) => (
  <Container>
    <div>
      <CnpjName>
        {cnpj} | {name}
      </CnpjName>      
      <small>{domain}</small>
    </div>
    <span>
      <InputCheckbox
        nameLabel=""
        active={active}
      />
    </span>
  </Container>
);

export default StoresListCard;
