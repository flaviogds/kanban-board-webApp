import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

export const Modal = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 6px;
    margin-top: calc(50vh - 225px);
    margin-left: calc(50vw - 175px);
    transition: all 1s ease;
    background: ${props => props.show.style ? props.show.style : 'white'};
    transform: ${props => props.show.viewe ? 'translateY(0vh)' : 'translateY(-100vh)'};
    display: ${props => props.show.viewe ? 'block' : 'none'};
    opacity: ${props => props.show.viewe ? 1 : 0};
`
export const Header = styled.header`
    height: 35px;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 1rem;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Close = styled(MdClose)`
    margin: auto 0;
    cursor: pointer;
`
export const Card = styled.div`
    position: relative;
    min-width: 350px;
    height: calc(100% -35px);
    padding: 0 25px 10px 25px;
    align-items: center;
    justify-content: center;
`
export const HeaderCard = styled(Header)`
    position: relative;
    min-width: 100%;
    height: 30px;
    align-items: center;
    justify-content:space-between;
    background: none;
    display: inline-flex;
`
export const Date = styled.span`
    font-size: 0.8rem;
    width: fit-content;
    justify-content: space-between;
    margin-right: ${props => props.marginRight};
`
export const Title = styled.h3`
`
export const Priority = styled.span`
    display: flex;
    width: 200px;
    margin: 20px 50px;
    padding: 0 40px;
    justify-content: space-between;
`
export const Description = styled.p`
    height: 200px;
    text-align: center;
`
export const Smooth = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    transition: all 2s;
    background: rgba(0, 0, 0, 0.70); 
`