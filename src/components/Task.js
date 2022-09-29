import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faCircle, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'

/* module Task */
const Task = ({task, toggleCompleted, editTask, deleteTask}) => {

    /* using useState to prube if task is being editing */
    const [editingTask, changeEditingTask] = useState(false);
    /* using useState have a new task and change the value of this task */
    const [newTask, changeNewTask] = useState(task.description);

    /* function to prevent refresh the app and change the value of editingTask to false */
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(task.id, newTask);
        changeEditingTask(false);
    }

    return ( 
        <li className='lista-tareas__tarea' >
            {/* icon to mark the task completed */}
            <FontAwesomeIcon 
                icon={task.completed ? faCheckCircle : faCircle} 
                className="lista-tareas__icono lista-tareas__icono-check"
                /* if the icon is pressed execute toogleCompleted(extracted from ListTasks passing the id of the task) to change 
                the value task.completed */
                onClick={() => toggleCompleted(task.id)}
            />

            <div className='lista-tareas__texto'>
                {/* if editing task is true, do a new form to obtain the new value of the input an assign it to newTask*/}
                {editingTask ? 
                <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className='formulario-editar-tarea__input'
                        value={newTask}
                        onChange={(e) => changeNewTask(e.target.value)}
                    />
                    {/* button submit to finally modify or change the task*/}
                    <button 
                        type='submit' 
                        className='formulario-editar-tarea__btn'>
                        Modificar
                    </button>
                </form>
                : task.description
                }
            </div>

            {/* including other icons */}
            <div className='lista-tareas__contenedor-botones'>
                {/* icon to edit the task */}
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className="lista-tareas__icono lista-tareas__icono-accion" 
                    /* if the icon edit is pressed the state of editingTask change */
                    onClick={() => changeEditingTask(!editingTask)}
                    />    
                
                {/* icon to delete the task */}
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className="lista-tareas__icono lista-tareas__icono-accion" 
                    onClick={() => deleteTask(task.id)}
                    />
            </div>
        </li>
     );
}
 
export default Task;