import styled from 'styled-components'

import { MdClose } from 'react-icons/md'

export const Modal = styled.div`
    position: absolute;
    width: 250px;
    height: 375px;
    margin-left: calc(50vw - 125px);
    margin-top: calc(50vh - 207.5px);
    border-radius: 6px;
    transition: all 1s ease;
    background: ${props => props.theme.colors.secondary};
    transform: ${props => props.show.show ? 'translateY(0vh)' : 'translateY(-100vh)'};
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
    padding: 10px 15px;
    align-items: center;
    justify-content: space-between;
`
export const Color = styled.input`
    width: 30px;
    height: 30px;
    float: right;
`
export const Body = styled.div`
    width: 100%;
    display: grid;
    font-size: 0.9rem;
`
export const Name = styled.input`
    width: 100%;
    height: 25px;
    margin-bottom: 10px;
    font-size: 0.9rem;
`
export const Description = styled.textarea`
    width: 100%;
    height: 80px;
    font-size: 0.9rem;
`
export const DateField = styled.span`
    width: fit-content;
    display: inline-grid;
    margin: 0 5px;
    padding: 0;
    margin-top: 10px;
    font-size: 0.7rem;
`
export const Date = styled.input`
    width: 100px;
    font-size: 0.7rem;
`
export const Priority = styled.div`
    display: inline-grid;
    margin: 10px 5px;
    font-size: 0.7rem;
    select {
        width: 100px;
        font-size: 0.7rem;
    }
`
export const Footer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    margin-top: 10px;
    padding: 0 6px;
    justify-content: space-between;
`
export const Button = styled.button`
    align-items: center;
    justify-content: center;
    padding: 2px;
    width: 90px;
    cursor: pointer;
`
export const Smooth = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    transition: all 2s;
    background: rgba(0, 0, 0, 0.50); 
`