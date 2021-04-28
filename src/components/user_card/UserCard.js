import React from 'react';
import UserButton from '../user_button/UserButton'

const UserCard=({user})=>
{
    
    
    return (
        <div className="card my-3 mx-1 col-md-3 bg-info" >
  <img className="card-img-top rounded-circle" src="https://via.placeholder.com/100" />
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">@{user.username}</p>
    <p className="card-text">{user.phone}</p>
    <UserButton id={user.id}></UserButton>
  </div>
</div> 
        )

}

export default UserCard;