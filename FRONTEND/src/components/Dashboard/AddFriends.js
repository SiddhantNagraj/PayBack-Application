
// Adding feature to add new friends/ people into the split
import React from 'react';
import "../../styles/Dashboard.scss";
import FriendList from './FriendList'
export const AddFriend = (props)=>{
    return(
        <div className = "AddFriend">
         
         <div className = "content">
         <div className = "friendHeader" >
            <label htmlFor="" className='title2'>FRIENDS</label>
            <button onClick = {props.friend} className = "AddFrnd float-right">+Add</button>
          
         </div>
         <div className = "Friend_List">
               <FriendList/>
         </div>
         </div>

        </div>
    )
}