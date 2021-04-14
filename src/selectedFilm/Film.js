
import {useEffect,React,useState} from 'react';
import { useHistory,useParams } from "react-router-dom";


 export default function Film() {
     let { filmId } = useParams();
    const [film,setFilm] = useState({});
    const history= useHistory();

useEffect(() => {
    const filmRequest = async () => {
        let url = "https://ghibliapi.herokuapp.com/films/"+filmId;

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
            setFilm(responseJson);
          })
    }
    filmRequest();
}, [])


const backHomeButton=() =>{
    history.push("/");
}

  return (
    <div> 
        <button onClick={backHomeButton}>home</button>

    <p>
        {film.title}
    </p>
     </div>
             
     
     
  );
}


