import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'
import Logo from '@Assets/logo.svg';

import {
  Header,
  Main,
} from '@layouts/App/style';

import SignIn from '@pages/SignIn';
import Todo from '@pages/Todo';

const App = () => (
  <div>
    <Header>
        <h1>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
        </h1>
    </Header>
    <Main>
      <Switch>
            <Route exact path="/" component={SignIn} ></Route>
            <Route path="/list" component={Todo}></Route>
      </Switch>
    </Main>
  </div>

)

export default App;
