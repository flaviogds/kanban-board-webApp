import styled from 'styled-components'

export const ItemStyle = styled.div`

        color: #f5f5f5;
        text-decoration: none;
        height: 30px;
        display: flex;
        align-items: center;
        border-radius: 25px;
        transition: 300ms;
        padding: 0.5rem;
        &&:hover{
            background-color: ${props => props.theme.colors.secondary};
        }
        a {
            color: #fff;
            text-decoration: none;
        }

        
`