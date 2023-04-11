import Cards from './components/Cards.jsx'
import styles from './App.css'
import Nav from './components/Nav.jsx'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import About from "./asset/styles/components/About/About.jsx"
import Header from './components/Header.jsx'
import Favorites from './components/Favorites.jsx'
import Home from './asset/styles/components/Home/Home.jsx'
import  Form  from './asset/styles/components/Form/Form.jsx'
// import  Form from './asset/styles/components/Form/Form.jsx'
import Detail from './components/Detail.jsx'




function App() {
  ////// la primera linea es de form
  // const[access, setAcces] = useState(false);
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "santice@mail.com";
  const password = "123abcd";

  const verificarRuta = () => {

    switch (pathname) {
      case "/": return false
      case "/home": return true
      case "/about": return true
      case "/favorites": return true
      case "//detail/:detailId": return false
      default: return false;
    }
  }
  

  ////////// credencial fake
  // const username = "santice@mail.com";
  // const password = "contraR&M123";

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "5eaac298f5af.9feb2ae7051d06d6532a"
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

  const login = (userData)=>{
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // const [characters, setCharacters] = useState([]);
  // const onSearch = () => {

  // }
  return (
    
    <div className='App'>

      
      
      {verificarRuta() && <Header onSearch={onSearch} />}

      
      <Routes>
        <Route
          path="/"
          element={<Form Login={login} />}
        />

        <Route path="/home" element={<Home characters={characters} setCharacters={setCharacters} />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

      <Route
      path="/detail/:detailId"
      element={<Detail />}
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
