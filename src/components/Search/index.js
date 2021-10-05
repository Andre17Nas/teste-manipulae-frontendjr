import * as S from './styled';
import { FaSearch } from 'react-icons/fa'

export default function Search(){
    return(
        <S.SearchWrapper>
            <S.SearchButton>
                <FaSearch size={30}/>
            </S.SearchButton>
            <S.SearchInput placeholder="Album, Artista ou Música"/>
        </S.SearchWrapper>
    )   
}