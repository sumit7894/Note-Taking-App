import React, { useRef, useState } from 'react'
import Styles from "./noteswindow.module.css"
import ButtonImage from "../../Utils/assests/text-area-button.svg"
import NoteList from './NoteList'
const NotesWindow = ({list,setList,selected}) => {
  const [newContent, setNewContent] = useState();
  const buttonRef = useRef(null);
  const getCurrentDate =()=>{
    const getDate = new Date();
    const options = {
      year: 'numeric',
      day: 'numeric',
      month: 'long',
    };
    const formattedDate = getDate.toLocaleString('en-IN', options);
    return formattedDate;
  }
  const getCurrentTime = ()=>{
    const getTime = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const currentTime = getTime.toLocaleString('en-IN', options);
    const formattedTime = currentTime.replace(/am|pm/gi, match => match.toUpperCase());
    return formattedTime;
  }  
  const handleKeyDown=(e)=>{
    if(e.key ==='Enter'){
      e.preventDefault();
      buttonRef.current.click();
    }
  }
  var selectedNote = "";
  if (selected > -1) {
    selectedNote = list.filter((item) => item.id == selected);
    selectedNote = selectedNote[0].notes;
  }

  const handleClick=()=>{
    const listItem = list.find((item) => item.id == selected);
    getCurrentDate();
    getCurrentTime();
    if(listItem){
      const newNote ={
        id : listItem.notes.length+1,
        content : newContent,
        date:getCurrentDate(),
        time:getCurrentTime()
      };
      listItem.notes = [...listItem.notes,newNote];
      const updatedList = [...list];
      setList(updatedList);
      localStorage.setItem("pocket_notes",JSON.stringify(updatedList));
      setNewContent("");
    }
  }
  return (
    <div className={Styles.window}>
        <div className={Styles.title_bar}>
          <div className={Styles.group_icon} style={{backgroundColor:list[selected].color}}>
            {list[selected].abbreviation}
          </div>
          <div className={Styles.group_title}>
            {list[selected].title}
          </div>
        </div>
        <div className={Styles.notes_date_time_content}>
          {selected > -1 ? 
          selectedNote.map((item)=><NoteList list={list} item={item} key={item.id}/>) : ""}
        </div>
        <div className={Styles.text_area_container}>
          <textarea className={Styles.text_area} 
          placeholder='Enter your text here...........'
          value={newContent}
          onChange={(e)=>setNewContent(e.target.value)}
          onKeyDown={handleKeyDown}
          />
          <div className={Styles.text_area_button_img}>
          <img src={ButtonImage} className={Styles.text_area_button_img} 
          alt='Enter-Button' onClick={handleClick}
          ref={buttonRef}
          />
          </div>
        </div>
    </div>
  )
}

export default NotesWindow