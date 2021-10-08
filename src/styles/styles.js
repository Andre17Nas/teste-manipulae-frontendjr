import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const TitleList = styled.h1`
    font-size: 24px;
    color: #FFF;
`
export const ListWrapper = styled.main`
    
    padding: 20px 20px 0px 20px;
    height: 60vh;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.3);
    
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    overflow-y: scroll;

`
export const SideWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #1B1B1B;
        border-right: 1px solid #FFF;
        width: 280px;
        height:100vh;
`
export const LinkContainer = styled.div`
        display: flex;
        flex-direction: column; 
        align-items: left;
        height: 200px;
        width: 90%;
`
export const Linker = styled(Link)`
    display: flex;
    justify-content: left;
    padding: 10px;
    font-size: 16px;
    width: 90%;
    text-decoration: none;
    color: #FFF;
`