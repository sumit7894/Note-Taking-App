import React from 'react'
import Styles from "./noteswindow.module.css"
import ButtonImage from "../../Utils/assests/text-area-button.svg"
const NotesWindow = ({selected,setDisplayPopup,list}) => {
  return (
    <div className={Styles.window}>
        <div className={Styles.titlebar}>
          <div className={Styles.icon} style={{backgroundColor: list[selected].color}}>
          {list[selected].abbreviation}
          </div>
          <div className={Styles.groupName}>
            {list[selected].title}
          </div>
        </div>
      <div className={Styles.textareaContainer}>
        <textarea placeholder='Enter your text here...........'/>
        <img src={ButtonImage} alt='enter' className={Styles.clickButton}/>
      </div>
    </div>
  )
}

export default NotesWindow