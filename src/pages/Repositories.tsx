import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { api } from '../services/axios';

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

      {repositories?.map(repository => {
        return (
          <li key={repository.full_name}>
            <Link to={`repos/${repository.full_name}`}>
              <strong>{repository.full_name}</strong>
            </Link>

            <p>{repository.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
