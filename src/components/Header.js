import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, PROFILE_PIC } from "../utils/constants";
import { toggleGPT } from "../utils/gptSlice";
import { SUPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    const showGPT = useSelector(store=>store.gpt.showGPT)
    const dispath = useDispatch();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {displayName, email,uid} = user;
              dispath(addUser({displayName, email,uid}))          
              navigate("/browse")    
              // ...
            } else {
                // User is signed out
                // ...
                dispath(removeUser())
                navigate("/")
                
            }
          });
        return  ()=> unsubscribe()
    },[])
    const handleGPTBtn = ()=>{
        dispath(toggleGPT())
    }
    const handleLangChange = (e)=>{
        dispath(changeLanguage(e.target.value))
    }
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
        
        {user && <div className="p-3 flex items-center">
            {showGPT && <select className="mx-3 p-2 rounded-md bg-black bg-opacity-70 text-white" onChange={handleLangChange}>
                
                {SUPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}
            <button className="px-2 my-2 h-[30px] bg-red-600 text-white rounded-md" onClick={handleGPTBtn}>{showGPT ? "Home" : "GPT Search"}</button>
        <div className="mx-3 p-1 rounded-md bg-green-100  font-bold ">{user?.displayName}</div>
        <img className="h-[60px] " alt="profile" src={PROFILE_PIC}/>
         <button onClick={handleSignOut} className="text-white bg-red-600 h-[30px] mx-3 rounded-md px-2">Sign Out</button>
        </div>
        }
        
    </div>
  );
};

export default Header;
