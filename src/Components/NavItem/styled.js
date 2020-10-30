import styled from 'styled-components'

export const Item = styled.li`
    position: relative;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        color: #fff;
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: ${props => props.theme.colors.primary};
        border: 2px solid white;
        border-radius: 50%;
        padding: 5px;
        margin: 2px;
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