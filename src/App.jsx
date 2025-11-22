import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import StudentPage from './pages/StudentPage';
import CompanyPage from './pages/CompanyPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Routes>
          <Route path="/" element={<StudentPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
