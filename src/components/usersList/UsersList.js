import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Route,useParams,Switch} from 'react-router-dom';

import UserButton from '../user_button/UserButton';
import UserCard from '../user_card/UserCard';




const UsersList=()=>{
    const[users,setUsers]=useState([]);
    const API_URL='https://jsonplaceholder.typicode.com/users';

    useEffect(async () => {
        const data = await axios
          .get(API_URL)
          .then(function(response) {
            return response;
          })
          .catch(function(error) {
            console.log(error);
          });
        setUsers(data.data);
      }, []);

      if(users){
          console.log(users);
      }
 
  
    return(
        <div className="row row-cols-4">
       {(users)?
       
            
        users.map((user, index) => (
        
         
         <UserCard className="" user={user}></UserCard>
)):
        <div>No data</div>

        
        }
        </div>
       
    
    )
}

export default UsersList;