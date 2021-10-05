import { TitleList, ListWrapper } from "../../styles/styles";
import * as S from './styled';
import ListItem from '../../components/ListItem'

function Fav(){
    return(
        <S.Section>
        <TitleList style={{marginTop:"50px"}}>MINHAS FAVORITAS</TitleList>
            <ListWrapper>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </ListWrapper>
        </S.Section>
    )
}

export default Fav;