import styles from './ListTask.module.css';
import { Task } from "./Task";


export function ListTask ({tasks,onDeleteTask, onMarkTaskComplete}) {

  return(
    <div className={styles.ListTask}>
      {
        tasks.map((item) =>{
          return (
            <Task 
            key={item.id}
            id={item.id} // Adicione a propriedade id
            isComplete={item.isComplete}
            contentTask={item.title}
            onDeleteTask={onDeleteTask}
            onMarkTaskComplete={onMarkTaskComplete}
          />
          )
        }
        )
      }      
    </div>
  )
}

