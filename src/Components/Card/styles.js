import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 250px;
    height: 200px;
    flex: 0 0 300px;
    border-radius: 5px;
    margin: 7.5px auto;
    padding-top: 7.5px;
    box-shadow: 0 1px 4px 0 rgba(192, 208 ,230,0.8);
    border-top: 40px solid rgba(230, 236 ,245,0.4);
    cursor: grab;
    background: ${props => props.color}
`
export const Header = styled.header`
    position: absolute;
    top: -41px;
    display: flex;
    width: 250px;
    margin: 3px -5px;
    align-items: center;
    justify-content:flex-end;
`
export const CardBody = styled.div`
    margin: 15px auto;
    padding: 0 10px;
`
export const CardTitle = styled.p`
    margin: 7.5px auto;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
`
export const CardDescription = styled.p`
    margin: 0;
    text-align: center;
    font-size: 0.9rem;
`
export const Button = styled.button`
    align-items: center;
    justify-content: center;
    padding: 2px;
    min-width: 30px;
    max-width: fit-content;
    cursor: pointer;
`