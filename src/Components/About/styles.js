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
    transform: ${props => props.show ? 'translateY(0vh)' : 'translateY(-100vh)'};
    opacity: ${props => props.show ? 1 : 0};
`
export const Header = styled.header`
    height: 35px;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: rgba(230, 236 ,245,0.4);
    padding: 1rem;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.secondary};
`
export const Close = styled(MdClose)`
    margin: auto 0;
    cursor: pointer;
`
export const Body = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    background: white;
    color: #000;
`
export const Title = styled.h3`
    padding: 10px 20px;
`
export const Description = styled.p`
    width: 100%;
    padding: 5px 20px;
    color: #000;
    word-break: break-word;
`
export const Link = styled.a`
    list-style: none;
    text-align: center;
    display: grid;
`
export const Copyright = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin-top: 10px;
`

export const Footer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    margin-top: 10px;
    bottom: -15px;
    justify-content: center;
`
export const Button = styled.button`
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    width: 90px;
    cursor: pointer;
`