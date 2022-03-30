import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome in The Ugly Chat ;)</h1>
      <div className="chatWindow">
        <div className="chatWindow__message-display"></div>
        <input className="chatWindow__input" type='text'/>
      </div>
    </div>
  )
}

export default Home
