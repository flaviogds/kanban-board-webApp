import styled from 'styled-components'

export const ItemStyle = styled.li`

    position: relative;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        color: #fff;
        text-decoration: none;

        width: 25px;
        height: 25px;
        background-color: ${props => props.theme.colors.primary};
        border: 2px solid ${props => props.theme.colors.secondary};
        border-radius: 50%;
        padding: 5px;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 300ms;
            && :hover{
                filter: brightness(1.2);
            }
    }
`