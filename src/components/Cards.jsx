import Card from './Card';
import styles from "../asset/styles/components/Cards/Cards.module.css"


export default function Cards({characters, onClose}) {
   
   return( 
   
   <div className= {styles.content} >
      {
         
         characters.map(({id, name, species, gender, image})=>{
            return(
               
            <Card className = {styles.tarjeta}
            id={id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {onClose}
            />
         );
      })}
   </div>
   );
}

//className= {styles.nombredeclasequequiera}

//en module .nombredeclasequequiera{estilos que quiera}