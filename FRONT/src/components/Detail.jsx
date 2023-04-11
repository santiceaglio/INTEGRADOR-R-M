import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"
import styles from "../asset/styles/Detail/Detail.module.css"


function Detail() {

    const { detailId } = useParams();
    console.log(detailId)

    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "5eaac298f5af.9feb2ae7051d06d6532a";

        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
					.then((response) => response.json())
					.then((data) => {
						data.name ? setCharacter(data) : alert('No esta el ID');
					});

        
    }, []);

    return (
        <div className={styles.content}>
            <div className={styles.contentTitle}>
            <h1 className={styles.titulo}>Bievenido a los detalles</h1>
            <Link to="/home"><h3 className={styles.link}>Volver</h3></Link>
            </div>
            
            
            {
                character.name ?
                    (<div className={styles.contentCard}>
                        <h2 className={styles.nombre}>{character.name}</h2>
                        <p className={styles.estado}>{character.status}</p>
                        <p className={styles.especie}>{character.species}</p>
                        <p className={styles.gender}>{character.gender}</p>
                        <p className={styles.origen}>{character.origin?.name}</p>
                        <img className={styles.imagen} src={character.image} alt="img" />
                    </div>)

                    : <h3 className={styles.carga}>Loading...</h3>
            }
        </div>
    );
}

export default Detail;



// import React from 'react'
// import Card from './Card'
// import { Link } from 'react-router-dom'
// import styles from "../asset/styles/Detail/Detail.module.css"

// fetch
// const Detail = () => {
//     return (
//         <div>
//             <Link to="/home">
//                 <h3 className={styles.item}>Volver</h3>
//             </Link>
//             <div className={styles.info}>

//                 <Link to={`/detail/${id}`}>
//                     <h2>Name:{name}</h2>
//                 </Link>
//                 <h2>Species:{species}</h2>
//                 <h2>Gender:{gender}</h2>
//             </div>
//         </div>
//     )
// }

// export default Detail
