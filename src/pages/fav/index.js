import { useState, useEffect } from 'react';
import { TitleList, ListWrapper } from "../../styles/styles";
import * as S from './styled';
import {useSelector} from 'react-redux';
import ListItem from '../../components/ListItem'

function Fav(){

    const selector = useSelector(state => state.favReducer);
    
    const [fav, setFav] = useState([]);
    

    useEffect(()=>{

        setFav(selector);

    }, [selector])

    return(
        <S.Section>
        <TitleList style={{marginTop:"50px"}}>MINHAS FAVORITAS</TitleList>
            <ListWrapper style={{height: "80%"}}>
                {
                    fav.map((track)=>(<ListItem key={track.id} props={track}/>))
                }
                
            </ListWrapper>
        </S.Section>
    )
}

export default Fav;