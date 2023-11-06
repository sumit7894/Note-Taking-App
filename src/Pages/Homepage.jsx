import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import NotesWindow from '../Components/NotesWindow/NotesWindow';
import Popup from '../Components/Popup/Popup';
import Overlay from '../Components/Overlay/Overlay';
import DefaultWindow from '../Components/NotesWindow/DefaultWindow';

const Homepage = () => {
  const [displayPopup,setDisplayPopup] = useState(false);
  const [selected,setSelected] = useState(-1);
  const [isMobileView,setIsMobileView] = useState(null);
  const [showSideBar,setShowSideBar] = useState(true);
  console.log(isMobileView);
  const [list,setList] = useState(()=>{
    const storedData = localStorage.getItem('pocket_notes');
    return storedData ? JSON.parse(storedData) : [];
  });
  const checkIsMobileView = ()=>{
    if(window.innerWidth<768){
      setIsMobileView(true);
    }else{
      setIsMobileView(false);
      setShowSideBar(true);
    }
  }
  useEffect(()=>{
    checkIsMobileView();
    const storedData = localStorage.getItem("pocket_notes");
    if(storedData){
      setList(JSON.parse(storedData));
    }
    window.addEventListener('resize', checkIsMobileView);
    return () => {
      window.removeEventListener('resize', checkIsMobileView);
    };
  },[])
  return (
    <div>
     <div style={{display:"flex",position:"relative"}}>
     {showSideBar&&(<Sidebar list={list} setList={setList} setDisplayPopup={setDisplayPopup}
     selected={selected} setSelected={setSelected} isMobileView={isMobileView}
     setShowSideBar={setShowSideBar}
     />)}
    {selected > -1 ? <NotesWindow selected={selected} list={list} setList={setList}/>: <DefaultWindow/>}
     </div>
     {displayPopup&&(<Overlay setDisplayPopup={setDisplayPopup}/>)}
     {displayPopup&&(<Popup list={list} setList={setList} setDisplayPopup={setDisplayPopup}/>)}
    </div>
  )
}

export default Homepage;