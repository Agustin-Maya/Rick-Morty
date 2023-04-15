import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   let i = 0;

   return (
      <div className={styles.cards}>
         {characters.length === 0 ? (
        <p style={{ color: "green", marginTop: "150px", fontSize: "24px" }}>
          ¡Busca un personaje!
        </p>
      ) : (
        characters.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => props.onClose(e.id)}
            key={i++}
          />
        ))
      )}
      </div>
   );
}
