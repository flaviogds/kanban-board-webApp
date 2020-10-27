import styled from 'styled-components'

export const NavStyle = styled.nav`

    display: flex;
    align-content: center;
    height: 41px;
    background-color: ${props => props.theme.colors.primary};
    padding: 0 1rem;
    border-bottom: 1px solid #474a4d;
    justify-content: flex-end;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        max-width: 100%;
        height: 100%;
        display: flex;
    }
`