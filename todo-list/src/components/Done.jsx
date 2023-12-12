
import styles from './Done.module.css'
export function Done ({tasks}) {

  const completdTasksCount = tasks.filter((task) => task.isComplete).length;
  return (
    <div className={styles.Done}>
    <strong>Concluídas<span>{completdTasksCount}</span></strong>
    </div>
  )
}