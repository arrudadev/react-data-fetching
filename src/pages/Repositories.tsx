import { useQuery } from 'react-query';

import { api } from '../services/axios';

type Repository = {
  full_name: string;
  description: string;
};

export function Repositories() {
  const oneMinute = 1000 * 60;

  const { data: repositories, isFetching } = useQuery<Repository[]>(
    'repos',
    async () => {
      const response = await api.get('/users/arrudadev/repos');

      return response.data;
    },
    {
      staleTime: oneMinute,
    },
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}

      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
