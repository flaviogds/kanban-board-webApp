import { MdFileDownload } from 'react-icons/md'
import styled from 'styled-components'


export const Tab = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    display:  ${props =>  props.display};
    justify-content: center;
`
export const Download =styled(MdFileDownload)`
    margin: auto;
    color: #03045e;
`
export const Link = styled.a`
    width: 100%;
    height: fit-content;
    text-align: center;
    margin-top: -40px;
`
export const Button = styled.button`
    width: 100px;
    height: fit-content;
    text-align: center;
`
export const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
    display: flex;
    margin-top: 10px;;
    justify-content: center;
`


