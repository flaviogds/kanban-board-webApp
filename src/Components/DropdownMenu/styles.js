import styled from 'styled-components'

export const Dropdown = styled.div`
    position: absolute;
    top: 40px;
    width: ${props => props.custom ? props.custom.width : 'auto'};
    transform: translateX(-45%);
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    padding: 1rem;
    overflow: hidden;
`
