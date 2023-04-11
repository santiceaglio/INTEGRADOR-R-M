import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import styles from "../asset/styles/components/Nav/Nav.module.css"
import { useLocation } from "react-router-dom";




const Nav = ({ onSearch }) => {


    const { pathname } = useLocation();



    return (
        <div className={styles.content}>
            <div className={styles.contentItem} >
                <Link to="/about">
                    <h3 className={styles.item}>About</h3>
                </Link>
                <Link to="/home">
                    <h3 className={styles.item}>Home</h3>
                </Link>
                <Link to="/favorites">
                    <h3 className={styles.item}>Favorites</h3>
                </Link>
            </div>
            {pathname === "/home" && <div className={styles.searchContent}>
                <SearchBar onSearch={onSearch} />
            </div>}

        </div>
    )
}



export default Nav;