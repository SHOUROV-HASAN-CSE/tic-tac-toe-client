import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";
import SignUp from "../component/SignUp";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  }
  
])


export default router;