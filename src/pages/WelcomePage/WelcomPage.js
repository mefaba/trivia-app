import React, { useContext } from 'react'
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
import {Link} from "react-router-dom"
import { fetchRawdata } from '../../api/Triva-Api'
import { GameContext } from '../../Context/GameContext'
import { useEffect } from 'react';

const WelcomPage = (props) => {
    const {setGameQA} = useContext(GameContext)

    useEffect(()=>{
        const fetchAPI = async () => {
            const {data} = await fetchRawdata()
            setGameQA(data.results)
            console.log("welcomepage",data.results)
        }
        fetchAPI()
    },[setGameQA])

    /* const handleStart = async () => {
        const {data} = await fetchRawdata()
        setGameQA(data.results)
        console.log("welcomepage",data.results)
    } */

    return (
        <div>
            <BannerUnit bannerImage={Image}>A TRIVIA GAME</BannerUnit>
            <Link to="/game"><button /* onClick={handleStart} */>Start Game</button></Link> 
        </div>
    )
}

export default WelcomPage
