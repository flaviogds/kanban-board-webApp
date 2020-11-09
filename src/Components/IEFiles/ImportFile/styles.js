import { MdArrowUpward } from 'react-icons/md'
import styled from 'styled-components'

export const Tab = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    display:  ${props =>  props.display? 'inline-grid' : 'none'};
    justify-content: center;
`

export const Load = styled.button`
    position: relative;
    width: 150px;
    height: fit-content;
    text-align: center;
    margin: -50px auto;
`
export const Input = styled.input`
    position: relative;
    width: fit-content;
    height: fit-content;
    text-align: center;
    top: 50%;
`

export const Loading = styled.span`
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    color: #03045e;
    display: inline-grid;
`