import styled from 'styled-components';

export const NavMobile = styled.div`
    margin:  0;
    padding: 0;
    width: 100%;
    text-align: right;
    position: absolute;
    display: none;
    background-color: #000;

    ul {    
        margin: 20px 0;
        display: none;
        width: 100%;
        height: 100%;
        background-color: #000;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    #label-menu{
        height: 20px;
        width: 100%;
    }

    #menu{
        display: none;
    }

    ul #li {
        margin: 40px;
        text-decoration: none;
        list-style: none;
        font-size: 1.5rem;
        text-align: center;
        color: #FFF;
    }

    ul li + {
        color: #FFF;
    }

    #menu:checked +ul{
        display: flex;
    }

 @media(max-width: 768px){
     display: flex;
     flex-direction: column;
 }
`