import styled from 'styled-components'

export const Dropdown = styled.div`
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
export const DropdownItem = styled.ul`
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
    li {
        color: #fff;
        text-decoration: none;
    }

        
`