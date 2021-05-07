import React,{useState,useEffect} from 'react'
import "./Row.css";
import axios from './axios'

function Row(props) {
    const [movies,setMovies]  = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchMovies)
            setMovies(request.data.results)
            return request
        }
    fetchData()
    },[props.fetchMovies])
   
    return (
        <div className = "row">
            <h2>{props.title}</h2>
            <div className = "row_posters">
            {movies.map((movie) => {
                return ((props.isLarge && movie.poster_path) || (!props.isLarge && movie.backdrop_path)) &&(
                <img 
                className = {`row_poster ${props.isLarge && "row_posterLarge"}`}
                key = {movie.id}
                src= {`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                alt = ""></img>
            )})}
            </div>
        </div>
    )
}

export default Row
