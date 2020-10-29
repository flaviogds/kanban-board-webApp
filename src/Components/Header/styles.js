import styled from 'styled-components'

export const Container = styled.div`
    height: 41px;
    padding-left: 30px;
    background:  ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`