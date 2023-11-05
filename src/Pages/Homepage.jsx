import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import NotesWindow from '../Components/NotesWindow/NotesWindow';
import Popup from '../Components/Popup/Popup';
import Overlay from '../Components/Overlay/Overlay';
import DefaultWindow from '../Components/NotesWindow/DefaultWindow';

const Homepage = () => {
  const [displayPopup,setDisplayPopup] = useState(false);
  const [selected,setSelected] = useState(-1);
  const [list,setList] = useState(()=>{
    const storedData = localStorage.getItem('pocket_notes');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(()=>{
    const storedData = localStorage.getItem("pocket_notes");
    if(storedData){
      setList(JSON.parse(storedData));
    }
  },[])
  return (
    <div>
     <div style={{display:"flex",position:"relative"}}>
     <Sidebar list={list} setList={setList} setDisplayPopup={setDisplayPopup}
     selected={selected} setSelected={setSelected}
     />
    {selected > -1 ? <NotesWindow selected={selected}   
    list={list} setList={setList}/>
    
    : <DefaultWindow/>}
     </div>
     {displayPopup&&(<Overlay setDisplayPopup={setDisplayPopup}/>)}
     {displayPopup&&(<Popup list={list} setList={setList} setDisplayPopup={setDisplayPopup}/>)}
    </div>
  )
}

export default Homepage;