import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import NotesWindow from '../Components/NotesWindow/NotesWindow';
import Popup from '../Components/Popup/Popup';
import Overlay from '../Components/Overlay/Overlay';
import DefaultWindow from '../Components/NotesWindow/DefaultWindow';

const Homepage = () => {
  const [displayPopup,setDisplayPopup] = useState(false);
  const [selected,setSelected] = useState(-1);
  const [list,setList] = useState([
    {
      id:"1",
      title:"School",
      color:"orange",
      abbreviation:"SU  ",
      notes:[
        {
          id:1,
          content:"Hello this is sumit",
          date:28/10/2023,
          time:"10:23 PM",
        }
      ]
    },
    {
      id:"2",
      title:"College",
      color:"green",
      abbreviation:"PN",
      notes:[
        {
          id:2,
          content:"Hello this is Monster. I'm going to kill everyone",
          date:12/12/2029,
          time:"12:23 PM",
        }
      ]
    }
  ]);
  return (
    <div>
     <div style={{display:"flex",position:"relative"}}>
     <Sidebar list={list} setList={setList} setDisplayPopup={setDisplayPopup}
     selected={selected} setSelected={setSelected}
     />
    {selected > -1 ? <NotesWindow selected={selected} setDisplayPopup={setDisplayPopup}  list={list}/>: <DefaultWindow/>}
     </div>
     {displayPopup&&(<Overlay setDisplayPopup={setDisplayPopup}/>)}
     {displayPopup&&(<Popup list={list} setList={setList} setDisplayPopup={setDisplayPopup}/>)}
    </div>
  )
}

export default Homepage;