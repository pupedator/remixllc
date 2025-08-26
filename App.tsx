import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

export type Page = 'home' | 'admin';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="bg-white font-sans text-slate-800">
      {page === 'home' ? (
        <HomePage setPage={setPage} />
      ) : (
        <AdminPage setPage={setPage} />
      )}
    </div>
  );
};

export default App;
