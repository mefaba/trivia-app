import React, { useContext } from 'react'
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
import {Link} from "react-router-dom"
import { GameContext } from '../../Context/GameContext'
/* import { fetchRawdata } from '../../api/Triva-Api'
import { useEffect } from 'react'; */

const WelcomPage = (props) => {
    /* console.log("welcomepage", props) */
    /* const handleStart = async () => {
        const {data} = await fetchRawdata()
        setGameQA(data.results)
        console.log("welcomepage",data.results)
    } */
    const {gameState, setGameState} = useContext(GameContext)
    const handleStart = () =>{ 
        setGameState({...gameState, started: true})
    }
    return (
        <div className="">
            <BannerUnit bannerImage={Image}>A TRIVIA GAME</BannerUnit>
            <Link to="/game"><button onClick={handleStart}>Start Game</button></Link> 
        </div>
    )
}

export default WelcomPage
