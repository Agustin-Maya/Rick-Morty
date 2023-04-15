import "./App.css";
import Cards from "./components/Cards/Cards"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/From.jsx"
import Error from "./components/Error/Error"
import { useState, useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId);
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }
  

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} logout={logout} />}

      <Routes>
        <Route exact path="/" element={<Form login={login} />}></Route>
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// import './App.css'
// // import Card from './components/Card.jsx'
// import Cards from './components/Cards.jsx'
// import SearchBar from './components/SearchBar.jsx'
// import characters from './data.js'
// // import Nav from './components/Nav'
// import React, {useState} from 'react'

// function App () {

//   const [characters, setCharacters] = useState([]);

//   function handleAddCharacter(character){
//     setCharacters((prevCharacters)=>{
//       return [character, ...prevCharacters];
//     })
//   }

//   function handleRemoveCharacter(characterId){
//     setCharacters((prevCharacters)=>{
//       return prevCharacters.filter((character)=> characterId !== character.id)
//     })
//   }

//   function onSearch(character){
//     fetch(`https://rickandmortyapi.com/api/character/${character}`)
//     .then((response) => response.json())
//     .then((data) => {
//        if (data.name) {
//         handleAddCharacter(character)
//        } else {
//           window.alert('No hay personajes con ese ID');
//        }
//     });
//   }

//   return (
//     <div className='App' style={{ padding: '25px' }}>

//         <Nav onSearch={onSearch}/>

//         <Cards
//           characters={characters}
//           onRemove={handleRemoveCharacter}
//         />

//     </div>
//   )
// }

// export default App;
