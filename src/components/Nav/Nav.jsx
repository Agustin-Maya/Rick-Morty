import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

function Nav(props){
    return(
        <nav>
            <Link to='/home/' className={styles.links}>Home</Link>
            <Link to='/about' className={styles.links}>About</Link>
            <button className={styles.links} onClick={props.logout}>LogOut</button>
           <SearchBar onSearch={props.onSearch} random={props.random}/>
        </nav>
    )
}

export default Nav;