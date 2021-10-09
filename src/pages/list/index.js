import Header from "../../components/Header";
import * as S from "./styled";
import { ListWrapper } from '../../styles/styles';
import ListItem from "../../components/ListItem";
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useSelector } from "react-redux";
import {Sentinel, Loading} from '../../styles/styles';


export default function List(){
    
    // Eu busco o valor adicionado no reducer
    const selector = useSelector(state => state.searchReducer);
    const search = selector

    const [items, setPlaylistDeezer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showLoadding, setShowLoading] = useState(true);

    useEffect(()=>{

        async function getPlaylistFromRapidApi(){
            setPlaylistDeezer(()=>[]) 
            setShowLoading(true);
            //carrega a lista das melhores musicas
            const response =  await api.get('/');
            setPlaylistDeezer(response.data);
            setShowLoading(false);

            //recupera o valor de search feita pelo usuario
            if(search !== ""){    
                setPlaylistDeezer(()=>[]) 
                
                setShowLoading(true);
                const response = await api.post('/page', {search, page: 1})
                .finally(()=> document.getElementById('sentinel').style.display = "block")    
                setShowLoading(true);
                setPlaylistDeezer(response.data.data);
                
                setCurrentPage(2)
            }            
        }
            getPlaylistFromRapidApi();   

    }, [search]) //realiza a busca dos charts e assiste sempre que tiver um novo valor pesquisado pelo usuario 


    useEffect(()=>{

        const observer = new IntersectionObserver((entries)=>{

            if(entries.some((entry) => entry.isIntersecting)){
                setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)   
                console.log(currentPage)

                document.getElementById('sentinel').style.display = "none"
                
            }
            
        });      

        

        
            async function fetchMore(){

                if(currentPage > 1){
                const response = await api.post('/page', {search, page: currentPage})
                .finally(()=> document.getElementById('sentinel').style.display = "block")

                setShowLoading(true);

                setPlaylistDeezer((old)=>[
                    ...old,
                    ...response.data.data
                ])
            }

            
        }

        fetchMore()

        observer.observe(document.getElementById("sentinel"));
        return () => observer.disconnect();

    }, [currentPage]) 

    useEffect(()=>{
        if(showLoadding){
            document.getElementById('loading').style.display = "block"
        }else{
            document.getElementById('loading').style.display = "none"
        }

    }, [showLoadding])

    return(
        <S.Section>
            <Header/>         
            <ListWrapper>
                {
                     items.map((track)=>( <ListItem key={track.id} props={track}/>)) 
                }
                <Sentinel id="sentinel"/>
                <Loading id="loading">. . . </Loading>
            </ListWrapper>
        </S.Section>
    )
}