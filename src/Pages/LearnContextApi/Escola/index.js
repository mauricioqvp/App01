import React from 'react';
import Sala from '../Sala';

import UserProvider from '../../../contexts/user';

function Escola(){


    return (
        <UserProvider>
            <div>
                <h2>Escola</h2>
                <span>Implantando Context Api (para aprendizado)</span>
                <hr/>
                <Sala/>
            </div>
        </UserProvider>
    );
}

export default Escola;