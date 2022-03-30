import type { NextPage } from 'next'
import { SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [message, setMessage] = useState('')
  const [listOfMessage, setListOfMessage] = useState([])
  const handleMessage = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value)
  }
  const addMessageToList = (msg: string) => {
        setListOfMessage([...listOfMessage, msg])
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.uglyTitle}>Welcome in The Ugly Chat ;)</h1>
      <div className={styles.chatWindow}>
        <div className={styles.messageDisplay}>
        {listOfMessage.length > 0 && listOfMessage.map((msg, index) => <p key={index}>{msg}</p>)}
        </div>
        <input value={message} className={styles.inputText} onChange={(e) => handleMessage(e)} type='text' onKeyPress={(e) => {
          if(e.charCode == 13) {
            addMessageToList(message)
            setMessage('')
          }            
          }          
          }/>
      </div>
    </div>
  )
}

export default Home
