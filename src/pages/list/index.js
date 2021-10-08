import Header from "../../components/Header";
import * as S from "./styled";
import { ListWrapper } from '../../styles/styles';
import ListItem from "../../components/ListItem";
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useSelector } from "react-redux";


export default function List(){

    const selector = useSelector(state => state.searchReducer);
    const search = selector
    console.log('search', search)

    const [items, setPlaylistDeezer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{

        async function getPlaylistFromRapidApi(){
           
            const response = await api.get('/');
            setPlaylistDeezer(response.data)             
            //console.log('busca', search)

            if(search !== ""){
                setPlaylistDeezer([])
                const response = await api.post('/page', {search: search, page: currentPage});
                console.log('pesquisa:', response.data)
                setPlaylistDeezer(response.data.data) 
            }
        }

            getPlaylistFromRapidApi();

    }, [search]) //toda vez que tiver um novo valor na busca 

    
    
    /*
    
    useEffect(()=>{
        const intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((entry)=> entry.isIntersecting)){
                setCurrentPage((currentPage)=> currentPage + 1);
                console.log(currentPage)
                
                //faz a listagem da nova pagina
                

            }
        });

        intersectionObserver.observe(document.getElementById('loadmore'))
        return ()=> intersectionObserver.disconnect();
        
    }, [])

    */

    return(
        <S.Section>
            <Header/>
            <ListWrapper>
                {
                     items.map((track)=>( <ListItem key={track.id} props={track}/>))
            
                }
                <span id="loadmore"/>
            </ListWrapper>
            
        </S.Section>
    )
}