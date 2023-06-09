import { Link } from "react-router-dom";
import styles from "../asset/styles/components/Card/Card.module.css" //asi se importa la hoja de estilos.
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/action";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Card({id, name, image, species, gender, onClose, removeFavorite, myFavorites}) {
   const [isFav, setIsFav] = useState(false);

   const { pathname } = useLocation();
   
   const addFavorite = (character)=>{
      axios.post("http://localhost:3001/rickandmorty/fav", character)
      .then((res)=> console.log("ok"));
   };

   
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({id, name, image, species, gender, onClose})
      }
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={styles.content}>
         {isFav ? (
      <button className={styles.corazon} onClick={handleFavorite}>💖</button>
         ) : (
      <button className = {styles.corazon} onClick={handleFavorite}>💚</button>
         )}
       {pathname === "/home" && <button onClick={() =>{onClose(id)}} className = {styles.escape}>X</button>}
       <img  src={image} alt="" className= {styles.image}/>
       <div className={styles.info}>
         <Link to={`/detail/${id}`}>
         <h2>Name:{name}</h2>
         </Link>
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
      </div> 
      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
   return {
      // addFavorite: (character) => {
      //    dispatch(addFavorite(character));
      // },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      
   },
};

}
const mapStateToProps = (state) => {
   return{
      myFavorites:state.myFavorites,
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card);
//destruction = ({si o si})
