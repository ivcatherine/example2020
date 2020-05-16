import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { MainMenu } from "./MainMenu";
import { MainPage }  from "./MainPage";
import { TodoPage } from "./TodoPage";
import { LoginPage } from "./LoginPage";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { auth: false };
  }

  handleLoginLogout = () => {
    this.setState((state) => ({auth: !state.auth}));
  };

  render (){
    return (
        <Router>
        <MainMenu />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/list" render={() =>
          this.state.auth ? (
            <TodoPage />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )}
          />
          <Route path="/login">
            <LoginPage isAuth={this.state.auth} handleLoginLogout={this.handleLoginLogout} />
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default App;
