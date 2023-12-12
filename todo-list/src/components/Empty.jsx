import styles from './Empty.module.css'
import empty from "../assets/task.svg"

export function Empty () {
  return(
    <div className={styles.Empty}>
    <img 
      className={styles.Img}
      src={empty} 
      alt="teste" />
      <div className={styles.Text}>        
        <p><span>Você ainda nào tem tarefas cadastradas</span></p>
        <p>Crie tarefas  e organize seus itens a fazer</p>
      </div>
    </div>
  )
}