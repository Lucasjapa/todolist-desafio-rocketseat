import {PlusCircle} from "phosphor-react";
import styles from './Searchbar.module.css'

export function Searchbar() {
  return (
    <form className={styles.searchbar}>
      <div>
        <input className={styles.searchinput} type="search" placeholder="Adcione uma nova tarefa"/>
        <button type="submit">Criar <PlusCircle size={16} weight="bold"/></button>
      </div>
    </form>
  )
}