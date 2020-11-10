import { MdDoneAll } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 260px;
    height: 200px;
    flex: 0 0 260px;
    border-radius: 5px;
    margin: 7.5px auto;
    padding-top: 7.5px;
    box-shadow: 0 1px 4px 0 rgba(192, 208 ,230,0.8);
    border-top: 40px solid rgba(230, 236 ,245,0.4);
    cursor: grab;
    background: ${props => props.concluded ? 'rgba(150, 150 , 150 ,0.9)' : props.color};
    color: ${props => props.concluded ? 'rgba(50, 50 , 50 ,0.5)' : 'black'}
`
export const Header = styled.header`
    position: absolute;
    top: -41px;
    display: flex;
    width: 260px;
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
    word-wrap: break-word;
`
export const Button = styled.button`
    align-items: center;
    justify-content: center;
    padding: 2px;
    min-width: 30px;
    max-width: fit-content;
    cursor: pointer;
`
export const Checked = styled(MdDoneAll)`
    position: absolute;
    bottom: 0px;
    right: 20px;
    float: right;
`