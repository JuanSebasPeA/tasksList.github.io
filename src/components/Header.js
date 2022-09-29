/* Author: Juan Sebastian Peña Angarita 
web App to write tasks and complete this tasks */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

/* header's page module */ 
const Header = ({showCompletedTasks, changeShowCompletedTasks}) => {

    const toggleCompleted = () => {
        changeShowCompletedTasks(!showCompletedTasks);
    }
    /* return JSX code */
    return ( 
        <header className="header">
			<h1 className="header__title">Lista de Tareas</h1>

			{showCompletedTasks ?
				<button 
					className="header__button"
					onClick={() => toggleCompleted()}
				>
					Solo completadas
					<FontAwesomeIcon icon={faEyeSlash} className="header__icon-boton" />
				</button>
			:
				<button 
					className="header__button"
					onClick={() => toggleCompleted()}
				>
					Mostrar Todo
					<FontAwesomeIcon icon={faEye} className="header__icon-button" />
				</button>
			}
		</header>
     );
}

// export my modules 
export default Header;