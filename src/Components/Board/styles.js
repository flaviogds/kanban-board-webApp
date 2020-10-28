import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: auto;

    /* @media(max-width: 540px){
        display: block;
        overflow-y: auto;
        overflow-x: auto;
    } */
    
`
export const Button = styled.button`
    align-items: center;
    justify-content: center;
    padding: 2px;
    min-width: 30px;
    max-width: fit-content;
    cursor: pointer;
`

export const NewTask = styled.button`
    align-items: center;
    justify-content: center;
    width: 60px;
    height:60px;
    margin: 20.5% 40.5%;
    cursor: pointer;
`