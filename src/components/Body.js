import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Header from "./Header"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"

const Body = () => {
    const dispath = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {displayName, email,uid} = user;
              dispath(addUser({displayName, email,uid}))              
              // ...
            } else {
                // User is signed out
                // ...
                dispath(removeUser())
                
            }
          });

    },[])
  return (
    <div className="body">
       
    <RouterProvider router={appRouter}>
        
       
    </RouterProvider>
    </div>
  )
}

export default Body