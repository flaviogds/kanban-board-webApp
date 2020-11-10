import styled from 'styled-components';

export const Tab = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    display:  ${props =>  props.display};
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
    color: #000;
`
export const Loading = styled.span`
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    color: #03045e;
    display: inline-grid;
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