import React, { useState } from 'react';
import { Theme } from './Theme'

export default function Provider( { children } ) {

    const [theme, setTheme] = useState(true);

    return (
        <Theme.Provider value={ { theme, setTheme } }>
            {children}
        </Theme.Provider>
    );

}