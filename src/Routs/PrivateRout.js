import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { mainContext } from '../context/UserContext';

const PrivateRouts = ({children}) => {
  const context = useContext(mainContext)
  console.log("contex from private route",context)
  let {user, loading} = useContext(mainContext) 
  if(loading){
    return <div>Loading...</div>
  }
 if(user && user.uid){
   return children;
 }
 return <Navigate to='/register' ></Navigate>
};

export default PrivateRouts;