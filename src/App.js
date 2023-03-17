import Cards from './components/Cards.jsx'
import styles from './App.css'

import Nav from './components/Nav.jsx'
import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import About from "./asset/styles/components/About/About.jsx"
import Header from './components/Header.jsx'


function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    const URL_BASE= "https://be-a-rym.up.railway.app/api"
      const KEY= "5eaac298f5af.9feb2ae7051d06d6532a"
      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
         setCharacters((oldChards) => [...oldChards, data])
        } else {
         alert("Algo salio mal")
        }
      })
   };
   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id))
   }
  
  

  // const [characters, setCharacters] = useState([]);
  // const onSearch = () => {

  // }
  return (

    <div className='App'>
      
      
      <Header onSearch={onSearch}/>
      <Routes>
        <Route path="/home" 
        element={<Cards characters={characters} onClose={onClose} />}
        />
        
        <Route
        path="/about"
        element={<About />}
        
        />
        </Routes>
        {/* <Route path="/detail/detailId" element={<Detail />} /> */}
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
        


    </div>
  )
}

export default App;
