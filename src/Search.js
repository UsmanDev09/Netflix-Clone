import React from 'react'
import NavBar from './NavBar'
import requests from './Request'
import Row from './Row'
import SearchResults from './SearchResults'
function Search(props) {
    

    return (
        <div  >
            <SearchResults  fetchMovies = {requests.searchMovie + props.typed}/>
         
        </div>
    )
}

export default Search
