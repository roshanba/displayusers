import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';



const UserDetails=()=>
{
    const {id} = useParams();
    
    const[user,setUsers]=useState([]);
    const[address,setAddress]=useState([]);
    const[company,setCompany]=useState([]);

    
    const API_URL=`https://jsonplaceholder.typicode.com/users/${id}`;

    console.log(API_URL);

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
        setAddress(data.data.address);
        setCompany(data.data.company);

      }, []);

      if(address){
         
          console.log(address.city);
          
          
      } 
    
    return (
    <div className="container d-flex p-3 bg-info">
        
        {/* left div */}
        <div className="left mr-5">
        <div className="profile_img pb-1">
            <img src="https://via.placeholder.com/150" className="rounded-circle"/>
        </div>
        <h5>{user.name}</h5>
        <p><a href="#" className=" btn btn-dark" >@{user.username}</a></p>
        <p> <a href="#" className="text-dark" >https://{user.website}</a></p>

        </div>

        {/* middle  div  */}
        <div className="right flex-column pl-5 mr-5 pt-5 ">
            
        
            <p> <span className="font-weight-bold pr-2" >Email: </span>{user.email}</p>
            <p><span className="font-weight-bold pr-2" >Phone: </span> {user.phone}</p>
            <div className="d-flex">
            {/*left div   */}
            <div className="">
            <p><span className="font-weight-bold pr-2" >Address: </span></p>
            </div>
            {/* right div  */}
            <div>
            <p>{address.city}</p>
            <p>{address.street}</p>
            <p>{address.zipcode}</p>
            {/* <p>{address.}</p> */}
            </div>

            </div>
            
          
          

        </div>


        <div className="right flex-column pt-5">
            <h6>Company</h6>
            <p className="">{company.name}</p>
            <p>{company.catchPhrase}</p>
            <p className="font-italic">{company.bs}</p>

        </div>














    </div> 
        )

}

export default UserDetails;