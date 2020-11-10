import styled from 'styled-components'

export const Item = styled.ul`
    position: relative;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: ${props => props.theme.colors.text};
        cursor: pointer;
        width: 30px;
        height: 30px;
        border: 2px solid white;
        border-radius: 50%;
        padding: 2px;
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 300ms;
            && :hover{
                filter: brightness(1.2);
            }
    }
`