import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    console.log(user);
    
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        
        {user && <div className="p-3 flex items-center">
        <div className="mx-3 p-1 rounded-md bg-green-100  font-bold ">{user?.displayName}</div>
        <img className="h-[60px] " alt="profile" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
         <button onClick={handleSignOut} className="text-white bg-red-600 h-[30px] mx-3 rounded-md px-2">Sign Out</button>
        </div>
        }
        
    </div>
  );
};

export default Header;
