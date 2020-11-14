import React, { useState, useMemo } from 'react';
import { Switch } from 'react-router-dom';

import Header from 'components/Mols/Header';
import Footer from 'components/Mols/Footer';

/* Páginas */
import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import UpdateUser from 'pages/UpdateUser';

import { useAuth } from 'hooks/auth';
import Route from './Route';

const Routes: React.FC = () => {
  const [tab, setTab] = useState('cursos');
  const { user } = useAuth();

  const HeaderTabs = useMemo(
    () => [
      { key: 'search', value: 'Pesquisar' },
      { key: 'favorites', value: 'Favoritos' },
    ],
    [],
  );
  return (
    <>
      {user && <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />}
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/updateuser" component={UpdateUser} isPrivate />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
      {user && <Footer />}
    </>
  );
};

export default Routes;
