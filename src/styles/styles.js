import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const TitleList = styled.h1`
    font-size: 24px;
    color: #FFF;
    margin-bottom: 10px;
`
export const ListWrapper = styled.main`
    margin: 0;
    padding: 20px 20px 0px 20px;
    height: 60%;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.3);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    overflow-y: scroll;

    @media(max-width: 768px){
        width: 100%;
    }

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

        @media(max-width: 768px){
            display: none;
        }


`
export const LinkContainer = styled.div`
        display: flex;
        flex-direction: column; 
        align-items: left;
        height: 200px;
        width: 100%;
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
export const Sentinel = styled.span`
    display: none;
    width: 100%;
    height: 2px;

`

export const Loading = styled.div`
    display: none;
    width: 100%;
    text-align: center; 
    font-size: 5rem;
    color: #FFF;
    align-items: self;
    animation: load 1.5s infinite;

    @keyframes load{
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    
`