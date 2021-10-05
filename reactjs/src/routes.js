import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Carrinho from './pages/carrinho';
import DetalheProduto from './pages/detalhe-produto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
                <Route path="/detproduto" exact={true} component={DetalheProduto} />
            </Switch>
        </BrowserRouter>
    )
}