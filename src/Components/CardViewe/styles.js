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
    transform: ${props => props.show.viewe ? 'translateY(0vh)' : 'translateY(-100vh)'};
    display: ${props => props.show.viewe ? 'block' : 'none'};
    opacity: ${props => props.show.viewe ? 1 : 0};
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
export const HeaderCard = styled(Header)`
    display: inline-flex;
    width: 12.5rem;
    margin: 0;
`
export const VieweControl = styled.header`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -41px;
    display: flex;
    width: 250px;
    margin: 3px -5px;
    align-items: center;
    justify-content:flex-end;
`
export const Date = styled.span`
    font-size: 0.8rem;
    width: fit-content;
    justify-content: space-between;
    margin: 1rem;
`
export const Title = styled.h3`
`
export const Card = styled.div`
    width: 13rem;
    height: 22rem;
`
export const Priority = styled.span`
    display: flex;
    width: auto;
    justify-content: space-between;
    margin: 0.5rem 2rem;
    font-size: 0.8rem;
`
export const Description = styled.p`
`
export const Smooth = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    transition: all 2s;
    background: rgba(0, 0, 0, 0.75); 
`