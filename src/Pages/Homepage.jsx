import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar';
import NotesWindow from '../Components/NotesWindow';
import Popup from '../Components/Popup';

const Homepage = () => {
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
     <div style={{display:"flex"}}>
     <Sidebar list={list} setList={setList}/>
     <NotesWindow/>
     </div>
    </div>
  )
}

export default Homepage;