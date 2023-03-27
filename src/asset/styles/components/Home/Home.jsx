import React from 'react'
import Cards from '../../../../components/Cards'

const Home = ({characters, setCharacters}) => {
    const onClose = (id) => {
        setCharacters(characters.filter((char) => char.id !== id))
     }
    return (

    <div>
        <h1>Esto es el Home</h1>
      <Cards characters={characters} onClose={onClose}/>
  
    </div>
  )
}

export default Home
