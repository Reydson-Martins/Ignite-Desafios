 import { useState } from 'react';
import { Header } from './components/Header';
import { InputList } from './components/InputList';
import './global.css';
import { Info } from './components/Info';
import { v4 as uuidv4 } from 'uuid'; // Importe a função uuidv4

export default function App() {
  
  const [tasks, setTasks] = useState([]);

  function handleCreatNewTask (newTask) {
    const newTaskItem = {
      id: uuidv4(), //chave unica
      title: newTask,
      isComplete: false
    };

    setTasks((state) => [...state, newTaskItem]);
    //...state sao os valores que ja existem
  }
    
  

  function handleDeleteTask(taskToDelete) {
   const tasksWitoutDeletedOne = tasks.filter((task) => task.id !== taskToDelete.id);
   setTasks(tasksWitoutDeletedOne)
  }

  function handleMarkTaskComplete(taskId){
    const updatedTasks = tasks.map((task) =>
    task.id === taskId
    ? { ...task, isComplete: !task.isComplete } 
    : task
    );

    setTasks(updatedTasks);
    
  }

  return (
    <div>
      <Header />
      <InputList onCreatNewTask={handleCreatNewTask}/>
      <Info 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask}
       onMarkTaskComplete={handleMarkTaskComplete} />

      
     
    </div>
  )
}
