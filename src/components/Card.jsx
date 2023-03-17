import styles from "../asset/styles/components/Card/Card.module.css" //asi se importa la hoja de estilos.
export default function Card({id, name, image, species, gender, onClose}) {
   return (
      <div className={styles.content}>
       <button onClick={() =>{onClose(id)}} className = {styles.escape}>X</button>
       <img  src={image} alt="" className= {styles.image}/> 
         <h2>Name:{name}</h2>
         <h2>Species:{species}</h2>
         <h2>Gender:{gender}</h2>
         
      </div>
   );
}
//destruction = ({si o si})
