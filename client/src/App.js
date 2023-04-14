import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from './pages/Page';
import Header from './components/headers/Header';
import HomePage from './pages/Home';
import CalendarPage from './pages/Calendar';
import AccountPage from './pages/Account';
import ThemeWrapper from './components/ThemeWrapper';
import LoginPage from './pages/Login';

const makePage = (title, Component) => (props) => (
  <Page title={title}>
    <Component {...props} />
  </Page>
);

const App = () => {
  return (
    <ThemeWrapper>
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Header />
        <Switch>
          <Route exact path={['/']} component={makePage('Home', HomePage)} />
          <Route exact path="/calendar" component={makePage('Calendar', CalendarPage)} />
          <Route exact path="/account" component={makePage('Home', AccountPage)} />
          <Route exact path="/login" component={makePage('Login', LoginPage)} />
        </Switch>
      </div>
    </ThemeWrapper>
  );
};

export default App;
