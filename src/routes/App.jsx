import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ComicPage from '../containers/ComicPage';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/comic/:id'} component={ComicPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;