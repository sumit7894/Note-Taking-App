import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import NotesWindow from '../Components/NotesWindow/NotesWindow';
import Popup from '../Components/Popup/Popup';
import Overlay from '../Components/Overlay/Overlay';

const Homepage = () => {
  const [displayPopup,setDisplayPopup] = useState(false);
  const [selected,setSelected] = useState(-1);
  const [list,setList] = useState([
    {
      id:"1",
      title:"School",
      color:"orange",
      abbreviation:"S",
      notes:[]
    },
    {
      id:"2",
      title:"College",
      color:"green",
      abbreviation:"PN",
      notes:[]
    }
  ]);
  return (
    <div>
     <div style={{display:"flex",position:"relative"}}>
     <Sidebar list={list} setList={setList} setDisplayPopup={setDisplayPopup}
     selected={selected} setSelected={setSelected}
     />
     <NotesWindow setDisplayPopup={setDisplayPopup}/>
     </div>
     {displayPopup&&(<Overlay setDisplayPopup={setDisplayPopup}/>)}
     {displayPopup&&(<Popup/>)}
    </div>
  )
}

export default Homepage;