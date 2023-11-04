import React, { useState } from 'react'
import Styles from './sidebar.module.css';
const Sidebar = ({list,setList}) => {
  const [selected,setSelected] = useState(-1);
  const handleClick=(idx)=>{
    setSelected(idx);
  }
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.heading}>
        <h1>Pocket Notes</h1>
        </div>
        <div className={Styles.btnContainer}>
        <button className={Styles.button}>
          + Create Notes Group
        </button>
        </div>
        {list.map((item,idx)=>
        <div className={Styles.listContainer} onClick={()=>handleClick(idx)}

        style={{backgroundColor: idx === selected ? "#F7ECDC" : "white"}}
        >
        <div style={{backgroundColor:item.color}} className={Styles.noteIcon}>
        {item.abbreviation}</div>
      <div style={{}}><h2>{item.title}</h2></div>
      </div> 
        )}
    </div>
  )
}

export default Sidebar;