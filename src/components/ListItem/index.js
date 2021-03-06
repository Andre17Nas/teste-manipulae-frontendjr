import * as S from "./styled";
import { FaPlay, FaPause, FaDeezer,FaHeart, FaMinus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function ListItem({props}){

    const currentLocation = useLocation();
    const dispatch = useDispatch();

    function addFav(track){
        
        dispatch({
            type: 'ADD_FAV',
            track
        })
    }

    function removeFav(track){
        dispatch({
            type: 'REMOVE_FAV',
            track
        })
    }

    
    
    return(
        <S.ItemWrapper>
        <S.InfoWrapper>
            <S.ItemImage src={props.artist.picture_small || props.album.cover_small} alt="miniatura da foto do artista"/>
            <S.ItemInfo>
                <h2>{props.title}</h2>
                <p>{props.artist.name}</p>
                <span>{(props.duration/60).toFixed(2)} </span>
            </S.ItemInfo>
        </S.InfoWrapper>

        <S.PlayerWrapper>
            <S.IconButton>
            <FaPlay color="#FFF" size={30} onClick={() => document.getElementById(props.id).play() }/><audio id={props.id} src={props.preview}/></S.IconButton>
            <S.IconButton>
            <FaPause color="#FFF" size={30} onClick={() => document.getElementById(props.id).pause()}/><audio id={props.id} src={props.preview}/></S.IconButton>
            <S.IconButton href={props.link} target="_blank"><FaDeezer color="#FFF" size={30}/></S.IconButton>
        </S.PlayerWrapper>
        <S.ActionContainer>
            {
                (currentLocation.pathname === "/favoritas") ? 
                <S.IconButton onClick={e=>removeFav(props)}><FaMinus color="#FFF" size={30}/></S.IconButton>
                :
                <S.IconButton onClick={e=>addFav(props)}><FaHeart color="#FFF" size={30}/></S.IconButton>
            }
        </S.ActionContainer>
        
    </S.ItemWrapper>
    
    )
}