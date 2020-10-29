import styled from 'styled-components'

export const Item = styled.ul`
    color: #f5f5f5;
    text-decoration: none;
    height: ${props => props.custom.high};
    display: flex;
    align-items: center;
    border-radius: 25px;
    transition: 300ms;
    padding: 0.5rem;
    &&:hover{
        background-color: ${props => props.custom.hover ? props.theme.colors.secondary : 'none'};
    }
    li {
        color: #fff;
        text-decoration: none;
    }
`