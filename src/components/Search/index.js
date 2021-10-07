import * as S from './styled';
import { FaSearch } from 'react-icons/fa';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

export default function Search(){
    const dispatch = useDispatch();    
    const [currentSearch, setSearch] = useState('');

    async function fetchData(e){

        e.preventDefault()

        if(currentSearch !== ''){
 
            dispatch({
                type: 'ADD_SEARCH',
                currentSearch
            })
            

        }else{
            setSearch('')

            dispatch({
                type: 'ADD_SEARCH',
                currentSearch
            })
        }
       
    }

    return(
        <S.SearchWrapper>
            <S.SearchButton onClick={fetchData}>
                <FaSearch size={30}/>
            </S.SearchButton>
            <S.SearchInput value={currentSearch} onChange={e => setSearch(e.target.value)} placeholder="Album, Artista ou Música"/>
        </S.SearchWrapper>
    )   
}