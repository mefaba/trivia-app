import React from 'react'
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
import {Link} from "react-router-dom"

const WelcomPage = (props) => {

    return (
        <div>
            <BannerUnit bannerImage={Image}>A TRIVIA GAME</BannerUnit>
            <Link to="/game"><button>Start Game</button></Link> 
        </div>
    )
}

export default WelcomPage
