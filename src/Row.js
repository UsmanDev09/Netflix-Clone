import React,{useState,useEffect} from 'react'
import "./Row.css";
import axios from './axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Row(props) {
    const [movies,setMovies]  = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
          
           
            const request = await axios.get(props.fetchMovies)
            console.log("request",request)
            setMovies(request.data.results)
            return request
        }
    fetchData()
    },[props.fetchMovies])
   

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1300 },
          items: 4,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1300, min: 650 },
          items: 2,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 650, min: 0 },
          items: 1,
          partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
        }
      }
    
    return (
        <div className = "row">
            <h2>{props.title? props.title: null}</h2>
            <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
 
  

  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
            
           
            {movies.map((movie) => {
                return ((props.isLarge && movie.poster_path) || (!props.isLarge && movie.backdrop_path)) &&(
                <img 
                className = {`row_poster ${props.isLarge && "row_posterLarge"}`}
                key = {movie.id}
                src= {`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                alt = ""></img>
            )})}
         
            </Carousel>
        </div>
    )
}

export default Row
