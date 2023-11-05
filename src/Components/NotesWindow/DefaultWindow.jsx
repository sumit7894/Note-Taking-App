import React from 'react'
import BackgroundImage from "../../Utils/assests/default-preview.png"
import Styles from "./defaultwindow.module.css"
import LOCK_IMG from "../../Utils/assests/lock.svg"
const DefaultWindow = () => {
  return (
    <div className={Styles.window}>
      <img
      src={BackgroundImage} alt='background' />
      <div className={Styles.heading}>
        Pocket Notes
        </div>
      <div className={Styles.sub_heading}>
      Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </div>
      <div className={Styles.footer_heading}>
      <div><img src={LOCK_IMG} alt='lock'/></div>
      <div>end-to-end encrypted</div>
      </div>
    </div>
  )
}

export default DefaultWindow