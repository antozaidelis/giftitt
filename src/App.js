import React from 'react';

import BuscadorRegalos from './components/BuscadorRegalos';
import BuscadorUsuarios from './components/BuscadorUsuarios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />

        <Switch>
          <Route exact path="/">
            <BuscadorRegalos />
          </Route>

          <Route path="/buscar_usuarios">
            <BuscadorUsuarios />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
