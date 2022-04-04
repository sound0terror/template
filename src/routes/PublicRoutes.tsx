import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/UI/Layout/Layout';
import Home from '../pages/Home';
import Countries from '../pages/Countries';

const PublicRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="countries" element={<Countries />} />
      <Route path="home" element={<Home />} />
      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem' }}>
            <p>There`s nothing here!</p>
          </main>
        )}
      />
    </Route>
  </Routes>
);

export default PublicRoutes;
