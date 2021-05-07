import "./Banner.css"
import {useEffect, useState} from 'react'
import axios from './axios'
import requests from './Request'
const Banner = () => {
    const [movie,setMovie] = useState([])
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrignals)
           
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
            return request;
        }
        
        fetchData();
    },[])
   
    const truncate = (text,descriptionLength) => {
       return  text?.length > descriptionLength? text.substring(0,descriptionLength)  + '...': text
    }
return(
    <header className = "banner" style ={{
        backgroundImage : `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
        backgroundSize : "cover"
    }}>
        <div className = "banner_contents">
            <h1 className = "banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className = "banner_buttons">
                <button className = "banner_button">Play</button>
                <button className = "banner_button">My List</button>
            </div>
            <div className = "banner_description">{truncate(`${movie?.overview}`,150)}</div>
       
        </div>
        <div className = "banner_fadeBottom"/>
    </header>
)

}

export default Banner;