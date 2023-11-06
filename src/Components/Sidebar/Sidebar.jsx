import React from 'react'
import Styles from './sidebar.module.css';
import NoteGroups from './NoteGroups';
const Sidebar = ({list,setList,selected,setSelected,setDisplayPopup,isMobileView,setShowSideBar}) => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.heading}>
        <h1>Pocket Notes</h1>
        </div>
        <div className={Styles.btnContainer} onClick={(e)=>e.stopPropagation()}>
        <button className={Styles.button} onClick={()=>setDisplayPopup(true)}>
          + Create Notes Group
        </button>
        </div>
        {list.map((item,idx)=>
        <NoteGroups selected={selected} setSelected={setSelected} item={item} idx={idx} key={idx}
        isMobileView={isMobileView} setShowSideBar={setShowSideBar}
        /> 
        )}
    </div>
  )
}

export default Sidebar;