import styled from 'styled-components'

export const SwitchStyle = styled.label`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.colors.secondary}; //cor fundo
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 17px;
    }

    span:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 13px;
        left: 2px;
        bottom: 2px;
        background-color: #fff; //cor bolinha
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    
    input:checked + span{
        background-color: ${props => props.theme.colors.primary};
    }

    input:focus + span {
        box-shadow: 0 0 0.5px #2196F3;
    }

    input:checked + span:before {
        -webkit-transform: translateX(7.5px);
        -ms-transform: translateX(7.5px);
        transform: translateX(7.5px);
    }
    

`