import React,{useEffect, useState} from 'react'
import UsersList from './components/usersList/UsersList';
import UserDetails from './components/user_details/UserDetails';
import axios from 'axios'
import {BrowserRouter as Router,Route,useParams,Switch} from 'react-router-dom';
 
const API_URL='https://jsonplaceholder.typicode.com/users';

// Axios will be used for HTTP request


function App() {
  
  return (
    <Router>
    

    <Switch>
    <Route path="/" exact component={UsersList} />
    <Route path="/:id" exact component={UserDetails} />
    </Switch>
    </Router>


      
       
       );
  }


 


export default App;
