/* Author: Juan Sebastian Peña Angarita 
web App to write tasks and complete this tasks */

import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListTask from './components/ListTasks';

/* main module */
const App = () => {

  /* obtain saved tasks from localStorage */ 
  const savedTasks = localStorage.getItem('tasks') 
  ? 
  JSON.parse(localStorage.getItem('tasks'))
  :
  []
  ;

  const [tasks, changeTasks] = useState(savedTasks);
    /* using useState to have an array with all tasks and can change it adding other task or deleting completed tasks. 
    tasks is an array of object with all tasks, and each one have an id, a description and a temporal state */

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks]);

let confShowCompletedTaks = '';
if(localStorage.getItem('showCompletedTasks') === null){
  confShowCompletedTaks = true;
}else {
  confShowCompletedTaks = localStorage.getItem('showCompletedTasks') === 'true';
}

  const [showCompletedTasks, changeShowCompleteTasks] = useState(confShowCompletedTaks);
  /* depuring showing all tasks 
  console.log(tasks); */

  /* saving the state of completed tasks */ 
  useEffect(() => {
    localStorage.setItem('showCompleteTasks', showCompletedTasks.toString);

  }, [showCompletedTasks]);


  /* all modules imported goes here */
    return (
      <div className='contenedor'>
        <Header 
            showCompletedTasks={showCompletedTasks} 
            changeShowCompletedTasks={changeShowCompleteTasks} />
        {/* Pass to form: tasks and xhangeTasks as properties */}
        <FormularioTareas 
            tasks={tasks} 
            changeTasks={changeTasks} />
        <ListTask 
            tasks={tasks} 
            changeTasks={changeTasks} 
            showCompletedTasks={showCompletedTasks}
            />
      </div>
    );
}

/* export my modules */ 
export default App;
