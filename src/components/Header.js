/* Author: Juan Sebastian Peña Angarita 
web App to write tasks and complete this tasks */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

/* header's page module */ 
const Header = () => {
    /* return JSX code */
    return ( 
        <header className='header'>
            <h1 className='header__title'>LISTA DE TAREAS</h1>   
            {/* button to hide the tasks */}
            <button className='header__button'>
                Ocultar
                {/* importing FontAwesome module */ }
                <FontAwesomeIcon icon = {faEyeSlash} className="header__icon-button" />
            </button>
        </header>
     );
}

// export my modules 
export default Header;