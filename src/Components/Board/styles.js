import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 41px);
    overflow-y: hidden;
    overflow-x: auto;
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