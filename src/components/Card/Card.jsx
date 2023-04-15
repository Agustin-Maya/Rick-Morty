import React from 'react';
import styles from './Card.module.css'
import {IoCloseCircleOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'



export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.btn} onClick={props.onClose}>
            <IoCloseCircleOutline />
         </button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h2 className={styles.species}>{props.species}</h2>
            <h2 className={styles.gender}>{props.gender}</h2>
         </div>
         <img  src={props.image} alt="" />
      </div>
   );
}
