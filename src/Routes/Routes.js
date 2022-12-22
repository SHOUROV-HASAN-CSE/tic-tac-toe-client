import { createBrowserRouter } from "react-router-dom";
import GamePlay from "../component/GamePlay/GamePlay";
import GamesHome from "../component/GamesHome";
import Home from "../component/Home";
import Login from "../component/Login";
import NewGame from "../component/NewGame";
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
  },
  {
    path:'/gameshome',
    element:<GamesHome/>
  },
  {
    path:'/newgame',
    element:<NewGame/>
  },
  {
    path:'/gameplay',
    element:<GamePlay/>
  },
  
])


export default router;