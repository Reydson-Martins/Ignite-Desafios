import styles from './Info.module.css'
import { Created } from './Created'
import { Done } from './Done'
import { Empty } from './Empty'
import { ListTask } from './ListTask '

export function Info({ tasks, onDeleteTask, onMarkTaskComplete }) {
  return(
    <div className={styles.Info}>
      <header>
        <Created taskAmount={tasks.length}/>
        <Done 
          tasks={tasks}/>
      </header>
      <main className={styles.Teste}>
        
        {tasks.length === 0 ? (
            <Empty />
        )
          : (
            <ListTask 
              tasks={tasks} 
              onDeleteTask={onDeleteTask}
              onMarkTaskComplete={onMarkTaskComplete} />
          )}      
      </main>
    </div>
  )
}