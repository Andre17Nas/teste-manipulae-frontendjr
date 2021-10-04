import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Fav from './pages/fav';
import List from './pages/list';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={List}/>
                <Route exact path="/favoritas" component={Fav}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;