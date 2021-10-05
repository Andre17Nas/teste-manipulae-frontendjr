import Search from '../Search';
import * as S from './styled';
import { TitleList } from '../../styles/styles'; 


function Header(){
    return(
        <S.HeaderWrapper>
            <Search/>
            <TitleList>AS MAIS TOCADAS DA DEEZER</TitleList>
        </S.HeaderWrapper>
    )
}

export default Header;