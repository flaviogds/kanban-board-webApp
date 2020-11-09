import styled from 'styled-components'

export const Container = styled.div`
    height: 40px;
    padding-left: 30px;
    background:  ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
`