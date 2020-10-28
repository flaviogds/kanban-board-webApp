import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    height: calc(100% - 51px);
    flex: 0 0 300px;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 7.5px;
    background: ${props => props.theme.components.table};

    /* 
    :hover {
        transform: scale(1);
    }
    */
`

export const Header = styled.header`
    display: flex;
    margin: 2.5px 5px;
    align-items: center;
`

export const Title = styled.h2`
    margin: 7.5px auto;
`

export const Body = styled.ul`
    list-style: none;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    align-items: center;
    justify-content: center;
    width: 30px;
    cursor: pointer;
`