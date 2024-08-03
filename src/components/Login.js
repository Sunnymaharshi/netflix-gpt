import { useRef, useState } from "react"
import Header from "./Header"
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
    const [signIn,setSignIn] = useState(true);
    const [error,setError] = useState({nameErr:null,emailErr:null,passwordErr:null,backendErr:null});
    const navigate = useNavigate();
    const dispath = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInForm = ()=>{
        setSignIn(!signIn);
    }
    const handleBtnClick = (e)=>{
        e.preventDefault()
        const validate = validateData(name.current,email.current, password.current)
        setError(validate);

        if(signIn){
            if(!validate.emailErr && !validate.passwordErr){
                // sign in
                
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse")
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError({...error,backendErr:errorMessage})
                });                
            }
        }
        else{
            if(!validate.nameErr && !validate.emailErr && !validate.passwordErr){
                // sign up
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: name.current.value
                          }).then(() => {
                            // Profile updated!
                            // ...
                            const {displayName, email,uid} = auth.currentUser;
                            dispath(addUser({displayName, email,uid})) 
                            navigate("/browse")
                          }).catch((error) => {
                            // An error occurred
                            // ...
                            setError({...error,backendErr:error.message})
                          });
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError({...error,backendErr:errorMessage})
                        // ..
                });
            }
        }
    }
  return (
    <div >
        <Header/>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg" alt="bg-image" />
        <form className="absolute text-white w-3/12 bg-[rgba(0,0,0,0.7)] my-64 mx-auto right-0 left-0 p-16 rounded-lg">
            <h1 className="mb-8 font-bold text-4xl">{ signIn ? "Sign In" : "Sign up"}</h1>
            {!signIn && <input ref={name} className="bg-[rgba(0,0,0,0.3)] mb-5 p-3 w-full border border-gray-50 rounded-md" type="text" placeholder="Name"/>}
            {!signIn && error.nameErr && <p className="text-red-500 p-3 mt-[-1rem]">{error.nameErr}</p>}
            <input  ref={email} className="bg-[rgba(0,0,0,0.3)] mb-5 p-3 w-full border border-gray-50 rounded-md" type="text" placeholder="Email Address"/>
            {error.emailErr && <p className="text-red-500 p-3 mt-[-1rem]">{error.emailErr}</p>}
            <input ref={password} className="bg-[rgba(0,0,0,0.3)] mb-5 p-3 w-full border border-gray-50 rounded-md" type="password" placeholder="Password"/>
            {error.passwordErr && <p className="text-red-500 p-3 mt-[-1rem]">{error.passwordErr}</p>}
            <br/>
            {error.backendErr &&  <p className="text-red-500 p-3">{error.backendErr}</p>}
            <button onClick={handleBtnClick} className="w-full p-2 my-5 rounded-md bg-red-600">{ signIn ? "Sign In" : "Sign up"}</button>
            <p className="text-gray-400 mt-6">{signIn ? "New to Netflix?" : "Already a user?"} <span className="text-white cursor-pointer select-none hover:underline" onClick={toggleSignInForm}>{signIn ? "Sign up now." : "Sign in now."}</span></p>
        </form>
    </div>
  )
}

export default Login