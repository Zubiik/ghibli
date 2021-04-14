import './App.css';
import {useEffect,React,useState} from 'react';
import {FilmBox} from "./styled.js";
import { useHistory } from "react-router-dom";

 export default function FilmList(onClick) {
  const history = useHistory();
  const [films, setFilms] = useState([]);

   useEffect(() => {
     const toto = async () => {
       let url = "https://ghibliapi.herokuapp.com/films";
  
       let request = {
              headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              },
              method: "GET",
          };
  
          await fetch(url,request)
          .then((response) => {
            return response.json();
          }).then((responseJson) => {
            setFilms(responseJson);
          })
     }
     toto();
   }, [])

   const filmSelection = (filmId) => {
    history.push("/film/" + filmId);
    
   };

  return (
    <div> 
      <div>search
        <input></input>
      </div>
      
      {films.map((film,index) => {
        return (
          <FilmBox key={index} >
            <div  onClick={() =>filmSelection(film.id)
          }>
            {film.title}
            </div>
          </FilmBox>
        )
      })}
    </div>
     
     
  );
}


