import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import Search from './Search'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import {logout,login, selectUser} from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          dispatch(login({
            uid : userAuth.uid,
            email : userAuth.email
          }))
        }else{
            dispatch(logout())
        }
        return () => unsubscribe
      })
  },[dispatch])
  return (

    
    <div className="app">
    
      <Router>
      {!user ? <LoginScreen/>:
        <Switch>
          <Route path =  "/search">
            <Search/>
          </Route>
          <Route path = { process.env.PUBLIC_URL + "/profile"}>
            <ProfileScreen/>
          </Route>
          <Route exact path = {process.env.PUBLIC_URL + "/"}>
            <HomeScreen/>
          </Route>
      </Switch>
}
      </Router>
    </div>
  );
    }


export default App;
