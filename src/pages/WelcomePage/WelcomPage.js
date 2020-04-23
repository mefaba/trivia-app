import React from 'react'
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
import {Link} from "react-router-dom"
/* import { fetchRawdata } from '../../api/Triva-Api'
import { GameContext } from '../../Context/GameContext'
import { useEffect } from 'react'; */

const WelcomPage = (props) => {

    /* const handleStart = async () => {
        const {data} = await fetchRawdata()
        setGameQA(data.results)
        console.log("welcomepage",data.results)
    } */

    return (
        <div className="app-container">
            <BannerUnit bannerImage={Image}>A TRIVIA GAME</BannerUnit> 
        </div>
    )
}

export default WelcomPage
