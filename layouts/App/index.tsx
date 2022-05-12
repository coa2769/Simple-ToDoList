import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Login from '@pages/Login';
import Todo from '@pages/Todo';

const App = () => (
  <Switch>
        <Route exact path="/">
            <Redirect to="/login"></Redirect>
        </Route>

        <Route path="/login" component={Login} ></Route>
        <Route path="/todo" component={Todo}></Route>
  </Switch>
)

export default App;
