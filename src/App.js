import React from 'react';
import './css/home.css'

//Components
import Login from './views/page_Login';
import Home from './views/page_Home';
import Landing from './views/page_Landing';
import Profile from './views/page_Profile';
import Register from './views/page_Register';
import Activation from './views/page_Activation';
import PasswordReset from './views/page_ResetPassword'

//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Navigation from './components/Navigation'

//Router (multipage)
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>

          <Route path="/" exact>
            <NavigationBar />
            <Landing />
          </Route>

          <Route path="/register" exact>
            <NavigationBar />
            <Register />
          </Route>

          <Route path="/login">
            <NavigationBar />
            <Login />
          </Route>

          <Route path="/activate/:token" exact>
            <NavigationBar />
            <Activation />
          </Route>

          <Route path="/home" exact>
            <Navigation />
            <Home />
          </Route>

          <Route path="/profile" exact>
            <Navigation />
            <Profile />
          </Route>

          <Route path="/pass-reset/:token" exact>
            <NavigationBar />
            <PasswordReset />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
