import React from 'react'
import imagen from '../asset/img/Rick_and_Morty.jpg'
import styles from "../asset/styles/components/Header/Header.module.css"
import Nav from './Nav'

const Header = (props) => {
  return (
    <div className={styles.content}>
      <div className= {styles.contentLogoMain}> <img src={imagen} className={styles.logo} alt="Rick_and_Morty.jpg" title="logo"/></div>
      <div className={styles.nav}>
      
      <Nav onSearch={props.onSearch}/>
      </div>
    </div>
  )
}

export default Header
