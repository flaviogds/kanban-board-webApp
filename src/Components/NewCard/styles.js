import styled from 'styled-components'

export const Modal = styled.div`
    width: 15rem;
    height: 28rem;
    max-width: 600px;
    max-height: 700px;
    margin-left: 40vw;
    margin-top: 9vh;
    vertical-align: middle;
    position: fixed;
    transition: all 1s ease;
    background: ${props => props.show.style ? props.show.style : 'white'};
    transform: ${props => props.show.show ? 'translateY(0vh)' : 'translateY(-100vh)'};
    display: ${props => props.show.show ? 'block' : 'none'};
    opacity: ${props => props.show.show ? 1 : 0};
`

export const Header = styled.header`

    background: ${props => props.show.style ? props.show.style : 'rgba(0, 23, 99, 0.8)'};
    color: white;
    padding: 1rem;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    height: 1.5rem;
    justify-content: space-between;

    img {
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const Title = styled.h3`
`

export const Form = styled.form`
    margin-bottom: 1rem;
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