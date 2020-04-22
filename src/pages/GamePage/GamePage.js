import React, { useContext, useState, useEffect } from 'react'
import "./gamepage.css"
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
import { GameContext } from '../../Context/GameContext'
const Entities = require('html-entities').XmlEntities;
const he = new Entities();
/* import ButtonUnit from '../../components/Button/ButtonUnit' */

const GamePage = () => {
    const {gameQA, shuffleArray} = useContext(GameContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answerList, setAnswerList] = useState([])
    const [userAnswer, setUserAnswer] = useState(null)

    useEffect(()=>{
        const shuffledlist = shuffleArray([gameQA[currentIndex].correct_answer,...gameQA[currentIndex].incorrect_answers])
        setAnswerList(shuffledlist)
    },[currentIndex,shuffleArray,gameQA])

    
    const handleAnswer = (event) => {
        const userChoice= event.target.value
        if(userChoice===gameQA[currentIndex].correct_answer){
            setUserAnswer(true)
        }else{
            setUserAnswer(false)
        }
        /* console.log("answerlist",answerList) */
    }

    const handleNext = () =>{
        setUserAnswer(null)
        if(currentIndex===9)
        setCurrentIndex(currentIndex+1)
        
        console.log(currentIndex)
    }

    const handleChange = (event) => {
        console.log(event.target)
    }
    if(userAnswer===true){
        return (
            <>
            <BannerUnit bannerImage={Image}>Correct Answer</BannerUnit>
            <button onClick={handleNext}>Next</button>
            </>
        )
    }
    if(userAnswer===false){
        return (
            <>
            <BannerUnit bannerImage={Image}>Wrong Answer</BannerUnit>
            <button onClick={handleNext}>Next</button>
            </>
        )
        
    }
    return(

        <div className="gamepage-container">

            <BannerUnit bannerImage={Image}>{decodeURI(gameQA[currentIndex].question)}</BannerUnit>
            {
            answerList.map((x,index)=>{
                return <button key={index} value={x} onChange={handleChange} onClick={handleAnswer}>{x}</button>
            })
            }
     
        </div>
    )
}

export default GamePage
