import React from 'react'
import "./gamepage.css"
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
/* import ButtonUnit from '../../components/Button/ButtonUnit' */

const GamePage = () => {
    const handleChange = (event) => {
        console.log(event.target)
    }
    return(
        <div className="gamepage-container">
            <BannerUnit bannerImage={Image}>Question</BannerUnit>
            <button onChange={handleChange}>Answer1</button>
            <button onChange={handleChange}>Answer2</button>
            <button onChange={handleChange}>Answer3</button>
            <button onChange={handleChange}>Answer4</button>
        </div>
    )
}

export default GamePage
