import { FaBars } from 'react-icons/fa';
import * as S from './styled';
import {Link} from 'react-router-dom';

export default function MenuMobile(){
    return(
        <S.NavMobile>           
            <label for="menu" id="label-menu"><FaBars  color="#FFF" size={40} /></label>
            <input type="checkbox" id="menu"/>
            <ul>
                <Link to="/" id="li">HOME</Link>
                <Link to="/favoritas" id="li" >MINHA PLAYLIST</Link>
            </ul>
        </S.NavMobile>
    )
}