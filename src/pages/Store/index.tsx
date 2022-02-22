import React from 'react';
import BtnController from '../../components/BtnController';
import ContentHeader from '../../components/ContentHeader';
import StoresListCard from '../../components/StoresListCard';
import { useQuery } from 'react-query';
import { Container, Content } from './styles';
import axios from 'axios';

type Store = {
  id: string;
  cnpj: string;
  name: string;
  domain: string;
  active: boolean;
}

type ResponseStore = {
  from: number;
	to: number;
	per_page: number;
	total: number;
	current_page: number;
	prev_page: number;
	next_page: number;
	last_page: number;
	data: Store[];
}

const Store: React.FC = () => {
  const { data, isFetching } = useQuery<ResponseStore>('ListStores', async () => {
    const response = await axios.get(`http://localhost:3333/stores`);
    // const response = await axios.get(`${process.env.URL_BASE_API}/stores`);

    return response.data;
  });

  return (
    <Container>
      <ContentHeader title="Posts" lineColor="#08f036">
        <BtnController title="Filtrar" />
      </ContentHeader>

      <Content>
        {isFetching && <p>Carregando</p>}
        {data?.data.map(store => {
          return (
            <StoresListCard
              cnpj={store.cnpj}
              name={store.name}
              domain={store.domain}
              active={store.active}
            />
          )
        })}
      </Content>
    </Container>
  );
}

export default Store;