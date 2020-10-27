import styled from 'styled-components'

export const DropStyle = styled.div`
    position: absolute;
    top: 40px;
    width: 100px;
    transform: translateX(-55%);
    background-color: ${props => props.theme.colors.primary};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1rem;
    overflow: hidden;
`