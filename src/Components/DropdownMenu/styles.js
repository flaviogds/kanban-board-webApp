import styled from 'styled-components'

export const Dropdown = styled.div`
    position: absolute;
    top: 40px;
    width: ${props => props.custom ? props.custom.width : 'auto'};
    transform: translateX(-45%);
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
    padding: 1rem;
    overflow: hidden;
    border: 1px solid ${props => props.theme.colors.primary};
`
export const Item = styled.li`
    color: ${props => props.theme.colors.text};
    min-width: 200px;
    min-height: 38.5px;
    text-decoration: none;
    align-items: center;
    border-radius: 25px;
    transition: 300ms;
    padding: 0.5rem;
    &&:hover{
        background-color: ${props => props.custom.hover ? props.theme.colors.primary : 'none'};
    }
    li {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
    }
`