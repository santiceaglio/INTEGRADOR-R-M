import Cards from './components/Cards.jsx'
import styles from './App.css'
import Nav from './components/Nav.jsx'
import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import About from "./asset/styles/components/About/About.jsx"
import Header from './components/Header.jsx'
import Favorites from './asset/styles/components/Favourites/Favorites.jsx'
import Home from './asset/styles/components/Home/Home.jsx'
// import  Form from './asset/styles/components/Form/Form.jsx'



function App() {
  ////// la primera linea es de form
  // const[access, setAcces] = useState(false);
  const [characters, setCharacters] = useState([]);

  ////////// credencial fake
  // const username = "santice@mail.com";
  // const password = "contraR&M123";

  const onSearch = (id) => {
    const URL_BASE= "https://be-a-rym.up.railway.app/api"
      const KEY= "5eaac298f5af.9feb2ae7051d06d6532a"
      if (characters.find((char) => char.id === id)) {
  
        return alert("personaje repetido")
  
      }
      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data])
            // setCharacters([...characters,data])
          } else {
            return alert("fuera del limite")
  
          }
        })
  
      // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      // .then(response => response.json())
      // .then((data) => {
      //   if (data.name && !characters.find((char) => char.id === data.id)) {
      //    setCharacters((oldChards) => [...oldChards, data])
      //   } else {
      //    alert("Algo salio mal")
      //   }
      // })
   };
   
  

  // const [characters, setCharacters] = useState([]);
  // const onSearch = () => {

  // }
  return (

    <div className='App'>
      
      
      <Header onSearch={onSearch}/>
      <Routes>
        <Route path="/home" element= {<Home characters={characters} setCharacters={setCharacters} />}
        />
        
        <Route
        path="/about"
        element={<About />}
        />

        <Route
        path="/favorites"
        element={<Favorites />}
        />
        </Routes>
        {/* <Route path="/detail/detailId" element={<Detail />} /> */}
      <div>
        {/* <Cards
          characters={characters} onClose={onClose}
        /> */}
      </div>
        


    </div>
  )
}

export default App;
