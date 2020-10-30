import styled from 'styled-components'

export const Form = styled.form`
    width: 200px;
    height: 100px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;
    background: ${props => props.theme.components.table};
    input{
        margin-bottom: 7.5px;

    }
    
`
export const Title = styled.h3`
    margin: 10px auto;
`
export const Button = styled.button`
    align-items: center;
    justify-content: center;
    padding: 2px;
    min-width: 30px;
    max-width: fit-content;
    cursor: pointer;
`