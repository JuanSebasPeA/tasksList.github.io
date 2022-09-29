import React from 'react';
import Task from './Task';

/* Destructuring and Extracting tasks and changeTasks from app's tasks added as property of this module */
const ListTask = ({tasks, changeTasks, showCompletedTasks}) => {

 /* function toogle to acces id task and execute changeTasks to change the value in task.completed and changing the icon too(in Task module) */
 /* this function can be execute in Task module too */
    const toggleCompleted = (id) => {
        /* debug: console.log('editing the task with the id:' id ); */
        /* changeTasks is modifying to the inverse value */
        changeTasks(tasks.map((task) => { 
            if(task.id === id) {
                /* ---task return the whole object but changing the completed attribute */
                return {...task, completed: !task.completed}
            }
            return task;
        }));
    }

    /* function to acces id task and execute changeTasks to change the value in task.description */
    /* this function can be execute in Task module too */
    const editTask = (id, newDescription) => {
        /* changeTasks is modifying to the inverse value */
        changeTasks(tasks.map((task) => { 
            if(task.id === id) {
                return {...task, description: newDescription}
            }
            return task;
        }));
    }

    /* the function filter finds the id and turn off the task of the array */
    const deleteTask = (id) => {
        changeTasks(tasks.filter((task) => { 
            if(task.id !== id) {
                return task
            }
            return;
        }));
    }

    return ( 
        <ul className='lista-tareas'>
            {/* if the length of tasks is more than 0 execute map function and return a li for each elelemen(task) */}
            {tasks.length > 0 ? tasks.map((task) => {
                if(showCompletedTasks) {
                    /* Charging Task component ans pass it the propertys key and task, the key is necessary in the li elelement, in this 
                    case the key is the same task's id */
                    return <Task 
                            key={task.id} 
                            task={task}
                            /* passing the property toogle... with the fuction toogle */
                            toggleCompleted={toggleCompleted}
                            editTask={editTask}
                            deleteTask={deleteTask}
                            />
                /* if task is not completed return the task */
                }else if(task.completed) {
                    return <Task 
                            key={task.id} 
                            task={task}
                            /* passing the property toogle... with the fuction toogle */
                            toggleCompleted={toggleCompleted}
                            editTask={editTask}
                            deleteTask={deleteTask}
                            />
                }
                /* if task is completed dont return the task */
                return;
            
            })
            /* else show a messaje saying "Sin tareas agregadas " */ 
            : <div className='lista-tareas__mensaje'>Sin tareas agregadas</div>
            }
        </ul>
     );
}
 
export default ListTask;