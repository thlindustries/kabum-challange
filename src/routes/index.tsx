import React, { useState, useMemo } from 'react';
import { Switch } from 'react-router-dom';

import Header from 'components/Mols/Header';
import Footer from 'components/Mols/Footer';

/* Páginas */
import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import UpdateUser from 'pages/UpdateUser';

import { AppContainer } from 'styles/AppStyles';

import { useAuth } from 'hooks/auth';
import Route from './Route';

const Routes: React.FC = () => {
  const [tab, setTab] = useState('cursos');
  const { user } = useAuth();

  const HeaderTabs = useMemo(
    () => [
      { key: 'dashboard', value: 'Dashboard' },
    ],
    [],
  );
  return (
    <AppContainer>
      {user && <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />}
      <Header actualTab={tab} tabs={HeaderTabs} changeTab={setTab} />
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/updateuser/:id" component={UpdateUser} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
      {user && <Footer />}
    </AppContainer>
  );
};

export default Routes;
