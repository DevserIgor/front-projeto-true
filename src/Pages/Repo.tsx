import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { queryclient } from "../services/queryClient";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams()
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    //quando eu quiser invalidar minha cache
    await queryClient.invalidateQueries(['repos']);

    //quando eu quero buscar os dados anteriories antes de atualizar
    const previousRepos = queryClient.getQueryData<Repository[]>('repos');

    if (previousRepos) {      
      const nextRepos = previousRepos?.map(repo => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: 'Testando'}
        } else {
          return repo;
        }

        queryclient.setQueryData('repos', nextRepos);
      });
    }
  }

  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar</button>
    </div>
  );
}