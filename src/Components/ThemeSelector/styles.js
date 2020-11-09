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
    display: ${props => props.show ? 'block' : 'none'};
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
export const Title = styled.h3`
`
export const Selector = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    background: white;
`
export const Sub = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 35px;
`
export const Sample = styled.div`
    width: 100px;
    height: 100px;
    display: inline-grid;
    margin: 20px;

    :hover{
        transform: scale(1.002);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
    
    header {
        width: 100%;
        height: 20px;
        text-align: center;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.secondary};
    }
    & div {
        width: 100px;
        height: 80px;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.primary};
    }
`
export const Footer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    margin-top: 10px;
    padding: 0 52px;
    bottom: -15px;
    justify-content: space-between;
`
export const Button = styled.button`
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    width: 90px;
    cursor: pointer;
`