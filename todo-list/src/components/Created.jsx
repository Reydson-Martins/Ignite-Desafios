import styles from './Created.module.css'



export function Created ({taskAmount}) {
  return (
    <div className={styles.Created}>
    <strong>Tarefas criadas: <span>{taskAmount}</span> </strong>
    </div>
  )
}