import {Header} from "./components/Header.tsx";
import {Searchbar} from "./components/Searchbar.tsx";
import {Taskboard} from "./components/Taskboard.tsx";
import styles from './App.module.css'

import './global.css'


export function App() {

  return (
    <main>
      <Header/>
      <section className={styles.principal}>
        <Searchbar/>
        <div>
          <Taskboard/>
        </div>
      </section>
    </main>
  )
}