import React from 'react'

const Overlay = ({setDisplayPopup}) => {
  return (
    <div style={{height:"100vh",width:"100vw",
     backgroundColor:"rgba(0,0,0,0.25)",
     position:"fixed",top:"0"}}
     onClick={()=>setDisplayPopup(false)}
     >
     </div>
  )
}

export default Overlay