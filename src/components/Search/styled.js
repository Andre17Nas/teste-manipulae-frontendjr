import styled from 'styled-components';

export const SearchWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 60px;
    background-color: #FFF;
    border-radius: 40px; 
    margin: 0;
    padding: 20px 0px;
    
`
export const SearchInput = styled.input`
    margin: 0;
    padding: 0px 20px;
    width: 320px;
    height: 40px;
    border: none;
    font-size: 1.2rem;

    &:focus {
        outline: none;
    }
`
export const SearchButton = styled.button`
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
