import React from 'react';
import './Alert.css'

export default function Alert (date) {
    const now = (new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate())

    if(now < date){
        return (<span style={{background: '#00ff00'}} className="date-alert"></span>);
    } else if(now === date){
        return (<span style={{background: '#ffff00'}} className="date-alert"></span>);
    } else if(now > date && date !== ''){
        return (<span style={{background: '#ff0000'}} className="date-alert"></span>);
    }
    else {
        return null;
    }
}