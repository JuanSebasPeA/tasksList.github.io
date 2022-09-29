/* Author: Juan Sebastian Peña Angarita 
web App to write tasks and complete this tasks */

import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListTask from './components/ListTasks';

/* main module */
const App = () => {
  /* using useState to have an array with all tasks and can change it adding other task or deleting completed tasks. 
  tasks is an array of object with all tasks, and each one have an id, a description and a temporal state */
  const [tasks, changeTasks] = useState(
    [
      {
        id: 1,
        description: 'finish the app',
        completed: true
      } 
    ]
    )
/* depuring showing all tasks */
console.log(tasks);

/* all modules imported goes here */
  return (
    <div className='contenedor'>
      <Header />
      {/* Pass to form: tasks and xhangeTasks as properties */}
      <FormularioTareas tasks = {tasks} changeTasks = {changeTasks}/>
      <ListTask tasks={tasks} changeTasks={changeTasks} />
    </div>
  );
}

/* export my modules */ 
export default App;
