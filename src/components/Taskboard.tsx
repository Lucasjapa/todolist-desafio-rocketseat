import styles from './Taskboard.module.css'
import {Boardempty} from "./Boardempty.tsx";

export function Taskboard() {
  return (
    <article className={styles.taskboard}>
      <header>
        <div>
          <strong className={styles.titletask}>Tarefas criadas</strong><span>0</span>
        </div>
        <div>
          <strong className={styles.titleconcluded}>Concluídas</strong><span>0</span>
        </div>
      </header>
      <Boardempty />
    </article>
  )
}