import React from 'react'
import Styles from "./notegroups.module.css"
const NoteGroups = ({selected,setSelected,item,idx}) => {
  const handleClick=(idx)=>{
    setSelected(idx);
  }
  return (
  <div className={Styles.listContainer} onClick={()=>handleClick(idx)} 
  style=
  {{backgroundColor: idx === selected ? "#F7ECDC" : ""}}>

  <div style={{backgroundColor:item.color}} className={Styles.noteIcon}>
    {item.abbreviation}
    </div>
  <div style={{}}><h2>{item.title}</h2></div>
  </div>
  )
}

export default NoteGroups;