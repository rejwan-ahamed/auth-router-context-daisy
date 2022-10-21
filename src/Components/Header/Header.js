import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { mainContext } from "../../context/UserContext";

const Header = () => {
    const {user,userMainLogout} = useContext(mainContext)
    console.warn(user)

    const userlogout =()=>{
        userMainLogout()
    }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">register</Link>
        <Link to="/order">orders</Link>

        {user&&<h1>{user.email}</h1>}
        {user&&<button className="btn btn-accent" onClick={userlogout}>Log out</button>}
      </div>
    </div>
  );
};

export default Header;
