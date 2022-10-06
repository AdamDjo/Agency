import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='notFound'>
                <div class="notFound-content">
                    <h2>Erreur 404</h2>
                    <NavLink to='/'>
                        <h3>Retour à l'accueil <i className='fas fa-home'></i></h3>
                    </NavLink>
                </div>
        </div>
    );
};

export default Notfound;