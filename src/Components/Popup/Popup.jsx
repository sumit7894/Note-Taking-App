import React from 'react'
import Styles from "./popup.module.css";
import { COLOR_CHOICES } from '../../Utils/constants';
import { useState } from 'react';
const Popup = ({list,setList,setDisplayPopup}) => { 
    const [selectedColor,setSelectedColor] = useState(-1);
    const [groupName,setGroupName] = useState("");
    const handleClick = ()=>{
      if(selectedColor === -1 || groupName === ""){
        return;
      }
      const lastNoteId = list.length-1;
      const groupAbreviation = groupName.split(' ').map(word => word[0].toUpperCase()).join('');
      const newGroup = {
        id: lastNoteId + 1,
        title: groupName,
        color: COLOR_CHOICES[selectedColor].color,
        abbreviation: groupAbreviation,
        notes: []
      };
      const updatedList = [...list,newGroup];
      setList(updatedList);
      localStorage.setItem("pocket_notes",JSON.stringify(updatedList));
      setGroupName("");
      setDisplayPopup(false);
    }
  return (
    <div className={Styles.popup}>
      <div className={Styles.heading}><h1>Create New Notes Group</h1></div>
      <div className={Styles.name}>
        <div className={Styles.subHeading}>Group Name</div>
        <input type='text' placeholder='Enter your group name...'
        value={groupName} onChange={(e)=>setGroupName(e.target.value)}
        />
      </div>
      <div className={Styles.choices}>
        <div className={Styles.subHeading}>Choose Colour</div>
        {COLOR_CHOICES.map((item,idx)=>
        <div className={Styles.colorDiv} 
        style={{backgroundColor:item.color,
        border: selectedColor === idx ? "4px solid black":"4px solid"+item.color}}
        key={idx} onClick={()=>setSelectedColor(idx)}/>
        )}
      </div>
      <button className={Styles.createBtn} onClick={handleClick}>
        Create
      </button>
    </div>
  )
}

export default Popup