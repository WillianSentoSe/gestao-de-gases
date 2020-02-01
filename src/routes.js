import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NotasFiscais from './pages/NotasFiscais';
import Empenhos from './pages/Empenhos';
import Gases from './pages/Gases';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={NotasFiscais} />
        <Route path='/empenhos' component={Empenhos} />
        <Route path='/gases' component={Gases} />
    </Switch>
);

export default Routes;