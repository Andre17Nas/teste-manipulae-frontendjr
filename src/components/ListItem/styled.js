import styled from 'styled-components';

export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const InfoWrapper = styled.div`
    display: flex;
    width: 400px;
`
export const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    background-color: #FFF;
`
export const ItemInfo = styled.div`
padding-left: 10px;
`

/* - - - -  */

export const PlayerWrapper = styled.div`
    
    width: 500px;
`
export const ActionContainer = styled.div`
    
    border-left: 1px solid rgba(255, 255, 255, 0.2);
`

export const IconButton = styled.a`
    margin: 0px 10px;
    border: none;   
    background-color: transparent;

    &:hover{
        cursor: pointer;
    }
`