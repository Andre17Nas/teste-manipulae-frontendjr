import * as S from './styled';
import { FaSearch } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import api from '../../services/api';
import axios from 'axios';

export default function Search(){
    
    let newData = []
    const [currentSearch, setSearch] = useState(' ');

    useEffect(()=>{

        function fetchData(){

            const album =  api.post(`/album`, {search: 'everglow'});
            const artist = api.post(`/artist`, {search: 'everglow'});
            const track =  api.post(`/track`, {search: 'everglow'}); 

            axios.all([album, artist, track]).then(axios.spread(function(...allData){
                //console.log(album)
                //console.log(artist)
                //console.log(track)

                newData = [...allData[0].data, ...allData[1].data , ...allData[2].data]

                console.log(newData)

            }))
           
        }

        fetchData();

    }, [])


    return(
        <S.SearchWrapper>
            <S.SearchButton>
                <FaSearch size={30}/>
            </S.SearchButton>
            <S.SearchInput placeholder="Album, Artista ou Música" value={currentSearch} onChange={e => setSearch(e.target.value)}/>
        </S.SearchWrapper>
    )   
}