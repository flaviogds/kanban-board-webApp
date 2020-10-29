import styled from 'styled-components'

import { MdClose } from 'react-icons/md'

export const Modal = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 6px;
    margin-top: calc(50vh - 225px);
    margin-left: calc(50vw - 175px);
    transition: all 1s ease;
    background: ${props => props.theme.colors.primary};
    transform: ${props => props.show.show ? 'translateY(0vh)' : 'translateY(-100vh)'};
    display: ${props => props.show.show ? 'block' : 'none'};
    opacity: ${props => props.show.show ? 1 : 0};
`
export const Header = styled.header`
    background: ${props => props.theme.colors.secondary};
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
export const Title = styled.h3`
`
export const Form = styled.form`
    width: 100%;
    height: calc(100% - 35px);
    padding: 15px;
    align-items: center;
    justify-content: space-between;
`
export const Color = styled.input`
    width: 30px;
    height: 30px;
    float: right;
`
export const Button = styled.button`
align-items: center;
justify-content: center;
padding: 2px;
min-width: 30px;
max-width: fit-content;
cursor: pointer;
`
export const Smooth = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    transition: all 2s;
    background: rgba(0, 0, 0, 0.75); 
`