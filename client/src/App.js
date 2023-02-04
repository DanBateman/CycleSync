import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Page from "./components/pages/Page";
import Header from "./components/headers/Header";
import HomePage from "./components/pages/Home";
import CalendarPage from "./components/pages/Calendar";
import AccountPage from "./components/pages/Account";
import ThemeWrapper from "./components/ThemeWrapper";

const makePage = (title, Component) => (props) => (
  <Page title={title}>
    <Component {...props} />
  </Page>
);

const App = () => {
  return (
    <ThemeWrapper>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={["/"]} component={makePage("Home", HomePage)} />
          <Route
            exact
            path="/calendar"
            component={makePage("Calendar", CalendarPage)}
          />
          <Route
            exact
            path="/account"
            component={makePage("Home", AccountPage)}
          />
        </Switch>
      </div>
    </ThemeWrapper>
  );
};

export default App;
