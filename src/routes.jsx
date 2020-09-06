import React from 'react'
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import EntregasList from './Pages/EntregasList';
import EntregasForm from './Pages/EntregasForm';
import EntregasDetails from './Pages/EntregasDetails';

/**
 * Tela 1 - Cadastro de Entregas
 * Tela 2 - Lista de Entregas
 * Tela 3 - Mapa
 */
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={() => <Redirect to={'/entregas'} />} path='/' exact />
            <Route component={EntregasList} path='/entregas' exact />
            <Route component={EntregasForm} path='/entregas/new' exact />
            <Route component={EntregasDetails} exact path='/entrega/:id' />
        </BrowserRouter>
    )
}

export default Routes