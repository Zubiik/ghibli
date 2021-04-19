import './App.css';
import {useEffect,React,useState} from 'react';
import {FilmBox, FilmsBoxContainer, ImageCustom, TextBox, SearchFilm} from "./styled.js";
import { useHistory } from "react-router-dom";
import toto from "./image/Castle_in_the_Sky.jpg"

 export default function FilmList(onClick) {
  const history = useHistory();
  const [films, setFilms] = useState([]);
  const [filmsToDisplay,setFilmsToDisplay] = useState([]);
  const [searchFilm,setSearchFilm] = useState("");
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
            setFilmsToDisplay(responseJson);
            setFilms(responseJson);
          })
     }
     toto();
   }, [])

   const filmSelection = (filmId) => {
    history.push("/film/" + filmId);
    
   };

   const searchInput = (event, setterFunction) =>{
    setterFunction(event.target.value);
   }

   const searchButton = () => {
    var myArray = films.filter((film) => {
      if (film.title === searchFilm) {
        return film
      } else {
        return false;
      }
    });
    setFilms(myArray);
  };

  useEffect(() => {
    if (searchFilm ==="") {
      setFilms(filmsToDisplay)
    }
    
  }, [searchFilm])
     
  return (
      <div>

      <SearchFilm>
        <div onClick={() => {
          searchButton();
        }}>search film</div>
        <input onChange={(event) => {
          searchInput(event, setSearchFilm)
        }
        }></input>
      </SearchFilm>
     <FilmsBoxContainer> 

      {films.map((film,index) => {
        return (
          <FilmBox key={index} >
            <ImageCustom src={toto}/>
 
            <div onClick={() =>filmSelection(film.id)
          }>

            <TextBox>{film.title}</TextBox>
            </div>
          </FilmBox>
        )
      })}
    </FilmsBoxContainer>
      </div>
     
     
  );
}


