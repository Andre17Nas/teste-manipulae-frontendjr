import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MenuMobile from './components/MenuMobile';
import Fav from './pages/fav';
import List from './pages/list';
import * as S from './styles/styles';

function Routes(){

    return(
        <BrowserRouter>
            <MenuMobile/>
            <S.SideWrapper>
                <S.LinkContainer>
                    <S.Linker to="/">HOME</S.Linker>
                    <S.Linker to="/favoritas">MINHA PLAYLIST</S.Linker>
                </S.LinkContainer>
           </S.SideWrapper>
            <Switch>
                <Route exact path="/" component={List}/>
                <Route exact path="/favoritas" component={Fav}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;