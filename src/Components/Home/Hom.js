import React, { useContext } from 'react';
import { mainContext } from '../../context/UserContext';

const Hom = () => {
    const {user} = useContext(mainContext)
    return (
        <div>
            <h1>home components {user?.email}</h1>
        </div>
    );
};

export default Hom;