import { createBrowserRouter } from "react-router-dom";
import GamePlay from "../component/GamePlay/GamePlay";
import GamesHome from "../component/GamesHome";
import Home from "../component/Home";
import Login from "../component/Login";
import NewGame from "../component/NewGame";
import SignUp from "../component/SignUp";
import YourGame from "../component/YourGame";
import PrivateRoute from "./PrivateRoute";

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
  },
  {
    path:'/gameshome',
    element:<PrivateRoute><GamesHome/></PrivateRoute>
  },
  {
    path:'/newgame',
    element:<PrivateRoute><NewGame/></PrivateRoute>
  },
  {
    path:'/gameplay',
    element:<PrivateRoute><GamePlay/></PrivateRoute>
  },
  {
    path:'/yourgame',
    element:<PrivateRoute><YourGame/></PrivateRoute>
  },
  
])


export default router;