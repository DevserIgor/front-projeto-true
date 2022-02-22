import React from 'react';
import BtnController from '../../components/BtnController';
import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';



const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="red">
        <BtnController title="Filtrin" />
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;