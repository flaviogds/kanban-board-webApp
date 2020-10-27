import React, { useContext } from 'react';
import { Theme } from '../state/Theme/Theme';

import './Theme.css'

export default function AppTheme () { 
    const { theme, setTheme } = useContext(Theme);

     return(
        <label className="switch">
            <input type="checkbox" onChange={() => setTheme(!theme)}/>
            <span className="slider round"></span>
        </label>
    );
}