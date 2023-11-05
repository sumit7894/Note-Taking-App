import React from 'react'
import Styles from "./noteslist.module.css";
const NoteList = ({item}) => {

  return (
    <div className={Styles.note}>
      <div className={Styles.date_and_time}>
        <div>{item.time}</div> 
        <div>{item.date}</div>
      </div>
      <div className={Styles.content}>
       {item.content}
      </div>
    </div>
  )
}

export default NoteList