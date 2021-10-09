import styled from  'styled-components';

export const HeaderWrapper = styled.header`
    width: 100%;
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 50px;
    justify-items: center;
    align-items: flex-end;
    text-align: center;

    @media(max-width: 480px){
        grid-template-rows: 80px 50px;
    }
`