import { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom'

const textos = {color: 'rgb(250, 7, 7)'};
const info = {textAlign: 'left', fontSize: '24px', margin: '10px'};
const image = {borderRadius: '10px', border: '2px solid'}
const divPrincipal = {
    color: 'red',
    display: 'flex',
    justifyContent: 'spece-around',
    width: '80%',
    margin: 'auto',
    marginTop: '75px',
}
const styleButton = {
    backgroundColor: "white",
    color: "red",
    border: "0px",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "15px",
    padding: "10px",
    marginTop: "35px",
    cursor: "pointer",
  };

export default function Detail(){

    const { detailId } = useParams();

    const [character, setCharacter] = useState({
        name: '',
        status: '',
        specie: '',
        gender: '',
        origin: '',
        image: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name: char.name,
                status: char.status,
                specie: char.specie,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image,
            })
            } else {
             alert("No hay personajes con ese ID");
            }
        })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
    }, [detailId]);

    return(
        <div>
            <div style={divPrincipal}>
                <div style={info}>
                    {character.name && <p><b style={textos}>Nombre:</b> {character.name}</p>}
                    {character.status && <p><b style={textos}>Status:</b> {character.status}</p>}
                    {character.specie && <p><b style={textos}>Specie:</b> {character.specie}</p>}
                    {character.gender && <p><b style={textos}>Gender:</b> {character.gender}</p>}
                    {character.origin && <p><b style={textos}>Origin:</b> {character.origin}</p>}
                </div>
                <img style={image} src={character.image}/>
            </div>
            <button style={styleButton} onClick={() => navigate('/home')}>Back To Home</button>
        </div>
    );
}