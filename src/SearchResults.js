import React,{useState,useEffect} from 'react'
import axios from './axios'
import './SearchResults.css'
function SearchResults(props) {
    const [movies,setMovies] = useState([])
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
        <div className = "searchResults">
            <div className = "searchResults_posters">
            {movies.map((movie) => {
                return ((props.isLarge && movie.poster_path) || (!props.isLarge && movie.backdrop_path)) &&(
                <div className = "searchResults_block">
                    <img 
                    className = {`searchResults_poster`}
                    key = {movie.id}
                    src= {`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                    alt = ""></img>
                    <h6 className = "searchResults_title">{movie.title}</h6>
                </div>
            )})}
            </div>
        </div>
    )
}

export default SearchResults
