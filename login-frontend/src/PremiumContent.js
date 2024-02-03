import React from 'react';
import { getUser, resetUserSession } from './service/AuthService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const PremiumContent = () => {
   const navigate = useNavigate(); // Use the useNavigate hook
   const user = getUser();
   // Ensure that user is an object and not 'undefined' before trying to access properties
   const name = user && typeof user !== 'undefined' ? user.name : '';

   const logoutHandler = () => {
      resetUserSession();
      navigate('/login'); // Use navigate function to redirect
   }

   return (
      <div>
         Hello {name}! You have been logged in.<br/><br/>
         Welcome to the premium content.
         This is the PremiumContent page!<br></br>
         <input type="button" value="Logout" onClick={logoutHandler} />
      </div>
   )
}

export default PremiumContent;

