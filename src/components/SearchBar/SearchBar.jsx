import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState(0)

   const handleSearch = (event) => {
      const {value} = event.target;
      setCharacter(value)
   };

   return (
      <div>
         <input type='search' className={styles.input} onChange={handleSearch}/>
         <button className={styles.btn} onClick={() => props.onSearch(character)}>Agregar</button>
         <button className={styles.btn} onClick={props.random}>
            Random Character
         </button>
      </div>
   );
}
