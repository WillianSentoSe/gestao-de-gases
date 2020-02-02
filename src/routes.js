import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NotasFiscais from './pages/NotasFiscais';
import Empenhos from './pages/Empenhos';
import Gases from './pages/Gases';
import Fornecedores from './pages/Fornecedores';
import FormFornecedor from './pages/Form/Fornecedor';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={NotasFiscais} />
        <Route path='/empenhos' component={Empenhos} />
        <Route path='/gases' component={Gases} />
        <Route path='/fornecedores' component={Fornecedores} />
        <Route path='/form' component={FormFornecedor} />
    </Switch>
);

export default Routes;