import { useState } from 'react';
import styles from './InputList.module.css'
import {IoAddCircleOutline} from "react-icons/io5"


export function InputList({onCreatNewTask}) {

    const [newTask, setNewTask] = useState('')

    const isNewTaskEmpty = newTask.length === 0

   function handleSubmit(event){
    event.preventDefault();    
    setNewTask('')
    onCreatNewTask(newTask)

   }
 
    function handleInputChange(event){
        setNewTask(event.target.value);
    }


    return(
        <div className={styles.inputList}>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={handleInputChange}
            />
            <button 
                 
                type="submit"
                disabled={isNewTaskEmpty}                  
            >Criar
            <IoAddCircleOutline className={styles.icon} />
            </button>
            </form>
        </div>
    )
}