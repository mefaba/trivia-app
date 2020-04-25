import React, { useContext, useEffect  } from 'react'
import { Switch, Route} from "react-router-dom";
import './App.css';
import GamePage from './pages/GamePage/GamePage';
import WelcomPage from './pages/WelcomePage/WelcomPage';
import { fetchRawdata } from './api/Triva-Api'
import { GameContext } from './Context/GameContext'
import {data} from "./api/data.js"
import NavbarInformation from './components/NavbarInformation/NavbarInformation';

function App() {
  const {setGameQA} = useContext(GameContext)

  useEffect(()=>{
      const mode="dev"
      if(mode==="dev"){
        setGameQA(data.results)
      }else{
      const fetchAPI = async () => {
          const {data} = await fetchRawdata()
          setGameQA(data.results)
          console.log("welcomepage",data.results)
      }
      fetchAPI()
    }
  },[setGameQA])

  return (
    <div className="app-container">
      <Route component={NavbarInformation}></Route>
      <Switch>
        <Route exact path="/" component={WelcomPage} />
        <Route exact path="/game" component={GamePage} /> 
      </Switch>
    </div>
  );
}

export default App;
