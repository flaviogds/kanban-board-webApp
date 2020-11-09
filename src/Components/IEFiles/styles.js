import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

export const Smooth = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    transition: all 2s;
    background: rgba(0, 0, 0, 0.70); 
`
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
    background-color: ${props => props.theme.colors.secondary};
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
export const Title = styled.h3`
`
 export const Body = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`
export const TabNavigation = styled.button`
    width: 50%;
    height: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #555;
    transition-delay: 150ms;

    :disabled {
        background: white;
        color:black;
        border-bottom: none;
    }
    :enabled {
    }
`
export const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
    display: flex;
    margin-top: 10px;
    padding: 0 55px;
    justify-content: space-between;
`
export const Button = styled.button`
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    width: 90px;
    cursor: pointer;
`