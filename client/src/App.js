import React, { useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page from './pages/Page';
import Header from './components/headers/Header';
import HomePage from './pages/Home';
import CalendarPage from './pages/Calendar';
import AccountPage from './pages/Account';
import ThemeWrapper from './components/ThemeWrapper';
import LoginPage from './pages/Login';
import { useSelector } from 'react-redux';
import ToastContext from './contexts/toast-context';
import StatsPage from './pages/Stats';
import BlogPage from './pages/Blog';

const makePage = (title, Component) => (props) => (
  <Page title={title}>
    <Component {...props} />
  </Page>
);

const makeRedirect = (location) => () => <Redirect to={location} />;
const RestrictedRoute = ({
  component: Component,
  deniedComponent: DeniedComponent,
  render,
  deniedRender,
  condition,
  ...props
}) => {
  const routeAllowed = typeof condition === 'function' ? condition() : !!condition;

  return (
    <Route
      {...props}
      render={(routeProps) => {
        if (routeAllowed) {
          return Component ? <Component {...routeProps} /> : render(routeProps);
        } else {
          return DeniedComponent ? <DeniedComponent {...routeProps} /> : deniedRender(routeProps);
        }
      }}
    />
  );
};

const makeLogInRequiredRoute = () => {
  return (props) => {
    const { error } = useContext(ToastContext);
    const isLoggedIn = useSelector((state) => state.auth.loggedIn);
    console.log(isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn) {
        error('Please log in to view this page.', {
          toastId: 'pageAccessToast',
        });
      }
    });

    return (
      <RestrictedRoute {...props} condition={isLoggedIn} deniedComponent={makeRedirect('/login')} />
    );
  };
};

const App = () => {
  const LoginRequiredRoute = makeLogInRequiredRoute();
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
          <Route exact path="/login" component={makePage('Login', LoginPage)} />
          <Route exact path="/blog" component={makePage('Blog', BlogPage)} />
          <Route exact path="/stats" component={makePage('Stats', StatsPage)} />
          <LoginRequiredRoute
            exact
            path="/calendar"
            component={makePage('Calendar', CalendarPage)}
          />
          {/* <LoginRequiredRoute
            exact
            path="/account"
            component={makePage("Account", AccountPage)}
          /> */}
          <LoginRequiredRoute exact path={['/']} component={makePage('Home', HomePage)} />
        </Switch>
      </div>
    </ThemeWrapper>
  );
};

export default App;
