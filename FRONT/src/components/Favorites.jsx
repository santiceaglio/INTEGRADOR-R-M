import { useSelector } from "react-redux";
// import Card from "../../../../components/Card";
import Card from "./Card";
import styles from "../asset/styles/components/Favorites/favorites.module.css"




const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites);

    return (
        <div>
            <h1>Elige tu personaje favorito</h1>
        
        <div className={styles.content}>
            
        
            {favorites.map(({ id, name, species, gender, image }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                );
            })
            }
        </div>
        </div>
    )
};
export default Favorites;