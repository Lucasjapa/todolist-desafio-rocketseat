import styles from "./Boardempty.module.css";
import {Clipboard} from "phosphor-react";

export function Boardempty() {
  return (
    <div className={styles.boardempty}>
      <Clipboard size={56}/>
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}