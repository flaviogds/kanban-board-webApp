import React, { useState } from 'react';
import { ModalShow } from './Modal'

export default function Provider( { children } ) {

    const [show, setShow] = useState(false);

    return (
        <ModalShow.Provider value={ { show, setShow } }>
            {children}
        </ModalShow.Provider>
    );

}