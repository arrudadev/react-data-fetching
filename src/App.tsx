import { Route, Routes } from 'react-router-dom';

import { Repositories } from './pages/Repositories';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repositories />} />
    </Routes>
  );
}
