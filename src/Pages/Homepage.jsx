import React, { useCallback, useEffect, useState } from 'react'
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
  const [showWindow,setShowWindow] = useState(false);
  const [showDefaultWindow,setShowDefaultWindow] = useState(true);
  const[backButton,setBackButton] = useState(false);
  const [list,setList] = useState(()=>{
    const storedData = localStorage.getItem('pocket_notes');
    return storedData ? JSON.parse(storedData) : [];
  });
  
  const handleResize = useCallback(() => {
    if(window.innerWidth<768){
      setIsMobileView(true);
      
    }else{
      setIsMobileView(false);
      if(selected>-1){
        setShowWindow(true);
      }
    }
  }, [selected]);

  const updateSelected = (newSelected) => {
    setSelected(newSelected);
  };
  useEffect(()=>{
    if(!isMobileView && selected>-1){
      setShowDefaultWindow(false);
      setShowWindow(true);
      setShowSideBar(true);
    }
    if(isMobileView){
      if(selected > -1){
        setShowSideBar(false);
        setShowWindow(true);
      }
    }
    // if(backButton){
    //   setShowSideBar(true);
    //   setShowWindow(false);
    // }
    console.log(backButton);
  },[selected,isMobileView])
  useEffect(() => {
    const storedData = localStorage.getItem("pocket_notes");
    if(storedData){
      setList(JSON.parse(storedData));
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  return (
    <div>
     <div style={{display:"flex",position:"relative"}}>
     
     {showSideBar&&(<Sidebar list={list} setList={setList} setDisplayPopup={setDisplayPopup}
     selected={selected} setSelected={setSelected} isMobileView={isMobileView}
     setShowSideBar={setShowSideBar} setShowWindow={setShowWindow} setShowDefaultWindow={setShowDefaultWindow}
     updateSelected={updateSelected}/>)}

    {showDefaultWindow && (<DefaultWindow/>)}
    { showWindow && (<NotesWindow selected={selected} list={list} setList={setList} setShowSideBar={setShowSideBar} 
    setShowWindow={setShowWindow} isMobileView={isMobileView} setSelected={setSelected} setBackButton={setBackButton}/>)}
    {/* {(selected > -1) && showWindow ? <NotesWindow selected={selected} list={list} setList={setList}/>:
    <DefaultWindow/>} */}
     </div>


     {displayPopup&&(<Overlay setDisplayPopup={setDisplayPopup}/>)}
     {displayPopup&&(<Popup list={list} setList={setList} setDisplayPopup={setDisplayPopup}/>)}
    </div>
  )
}

export default Homepage;