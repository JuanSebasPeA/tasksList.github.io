/* Author: Juan Sebastian Peña Angarita 
web App to write tasks and complete this tasks */

import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';  //this module allows create an id for each thing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

 /* Module taskForm and destructuring to extract tasks and changeTasks from the App's useState  */
const FormularioTareas = ({tasks, changeTasks}) => {

    /* using useState to change the state of inputTask, and this is very important to asign inputTask to the new task in the Task's array */
    const [inputTask, changeInputTask] = useState('');

    /* change the inputTarea to the input value in the form */
    const handleInput = (e) => {
        changeInputTask(e.target.value);
    }

    /* function to add tasks to the array(tareas), and dont refresh the page anymore in the button to add tasks */
    const handleSubmit = (e) => {
        /* prevent the refresh in the page each time the input change */
        e.preventDefault();
        /* changeTask to asign the new task(obtained from inputTask) to the object's array with all task, each one with an id and a 
        state(false)*/
        changeTasks(
            [
                ...tasks, 
                {
                    id: uuidv4(),  /* calling the function to asign a special id for each element */
                    description: inputTask,
                    complete: false
                }
            ]
        );
    }

    /* return JSX code */
    return ( 
        /* onSubmite executes the function handleSubmit */
        <form action='' className='form-tasks' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='form-tasks__input' 
                placeholder='Escribe una tarea'
                /* the value in the input will save in inputTask*/
                value={inputTask}
                /* if there a change in the input, execute the function handleInput that help to execute changeInputTask(to change 
                the inputTask state to the value in the input) */
                onChange={(e) => handleInput(e)}
            />
            {/* button to submit the task wrote in the input */ }
            <button 
                type='submit' 
                className='form-tasks__btn'
            >
                {/* including an icon from FontAwsome module */}
                <FontAwesomeIcon 
                    icon={faPlusCircle}
                    className='form-tasks__icon-btn'
                />
            </button>
        </form>
     );
}

/* export my modules */ 
export default FormularioTareas;