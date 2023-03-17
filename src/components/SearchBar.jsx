import styles from "../asset/styles/components/SearchBar/SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   }
   return (
      <div className = {styles.bar}>
         <input type='search' className = {styles.searchInput} onChange={handleChange}/>
      <button className={styles.searchButton} onClick={() =>onSearch(id)}>Search</button> 
      </div>
   );
}
