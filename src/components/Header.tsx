import todoLogo from '../assets/todo-Logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo todo"/>
    </header>
  )
}