import react,{useState} from 'react';
import Banner from './Banner'
import LoginScreen from './LoginScreen';
import NavBar from './NavBar'
import requests from './Request'
import Row from './Row'
import Search from './Search';

const HomeScreen = () => {
  const [searching,setSearching] = useState(false)
  const [typed,setTyped] = useState('')
  const onSearch = (e) => {
    if(e.target.value.length > 0) {
      setSearching(true)
    }else{
      setSearching(false)
    }
    setTyped(e.target.value)
  }
 


    
 
  return (
    
        <div className  = "homeScreen">


           <NavBar onSearch = {onSearch}/>
          {!searching? 
          <div>
           <Banner/>
        
              <Row 
              title = "Netflix Orignals"
              fetchMovies = {requests.fetchNetflixOrignals}
              isLarge = "false"/>
          
          
            
            
            
            
          
            <Row 
              title = "Top Rated"
              fetchMovies = {requests.fetchTopRated}
              isLarge = "false"/>
        
            <Row 
           title = "Top Trending"
           fetchMovies = {requests.fetchTrending}
           isLarge = "false"/>
            <Row 
           title = "Action Movies"
           fetchMovies = {requests.fetchActionMovies}
           isLarge = "false"/>
            <Row 
           title = "Romance Movies"
           fetchMovies = {requests.fetchRomanceMovies}
           isLarge = "false"/>
            <Row 
           title = "Horror Movies"
           fetchMovies = {requests.fetchHorrorMovies}
           isLarge = "false"/>
            <Row 
           title = "Comedy Movies"
           fetchMovies = {requests.fetchComedyMovies}
           isLarge = "false"/>
             <Row 
           title = "Documentries"
           fetchMovies = {requests.fetchDocumentries}
           isLarge = "false"/>
           </div>
            : <div style = {{position:"relative",top:"80px",backgroundColor:"#111"}} ><Search typed = {typed}></Search></div>} 
          
        </div>
    )
  
}

export default HomeScreen;