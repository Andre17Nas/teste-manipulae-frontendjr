import Header from "../../components/Header";
import * as S from "./styled";
import { ListWrapper } from '../../styles/styles';
import ListItem from "../../components/ListItem";
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function List(){

    const [items, setPlaylistDeezer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{

        async function getPlaylistFromRapidApi(){

            const response = await api.get('/');

            setPlaylistDeezer(response.data);
        }

        getPlaylistFromRapidApi();

    }, [])

    useEffect(()=>{
        const intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((entry)=> entry.isIntersecting)){
                setCurrentPage((currentPage)=> currentPage + 1);
                
            }
        });

        intersectionObserver.observe(document.getElementById('loadmore'))
        return ()=> intersectionObserver.disconnect();
    }, [currentPage])


    return(
        <S.Section>
            <Header/>
            <ListWrapper>
                {
                    items.map((track)=>(
                        <ListItem key={track.id} props={track}/>
                    ))
                }
                <span id="loadmore"></span>
            </ListWrapper>
        </S.Section>
    )
}