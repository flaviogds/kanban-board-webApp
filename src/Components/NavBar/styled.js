import styled from 'styled-components'

export const NavStyle = styled.nav`

    display: flex;
    align-content: center;
    height: 40px;
    background-color: ${props => props.theme.colors.primary};
    padding: 0 1rem;
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