import styled from 'styled-components'

export const Dropdown = styled.div`
    position: absolute;
    top: 41px;
    width: ${props => console.log(props)};;
    transform: translateX(-45%);
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    padding: 1rem;
    overflow: hidden;
`
