import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchContainer from '../containers/SearchContainer';
import ItemsContainer from '../containers/ItemsContainer';
import ItemContainer from '../containers/ItemContainer';

const routes = [
  { component: SearchContainer, path: '/' },
  { component: ItemsContainer, path: '/items' },
  { component: ItemContainer, path: '/items/:id' },
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} exact key={route.path} />
      ))}
    </Switch>
  );
}

export default React.memo(Routes);