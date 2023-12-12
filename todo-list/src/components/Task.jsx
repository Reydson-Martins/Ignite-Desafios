import {RiDeleteBinLine} from 'react-icons/ri' 
import styles from './Task.module.css'
import { useState } from 'react'


export function Task ({id, contentTask,isComplete, onDeleteTask, onMarkTaskComplete}) {


  function handleDeleteTask () {
    onDeleteTask({id})
  }

  function CheckedTask () {
    onMarkTaskComplete(id, !isComplete)
  }
 
  return(
   
    <div  className={`${styles.Task} ${isComplete ? styles.tachado : ''}`}  >
      <input 
        className={styles.Checked}
        type="checkbox"
        onClick={CheckedTask} 
        />
      
      <div>
      <p >{contentTask}</p>
      </div>
      
      <RiDeleteBinLine
        className={styles.Remove}
        onClick={handleDeleteTask}
        />
    </div>
  )
}