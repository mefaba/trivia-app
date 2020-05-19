import React, { useContext, useState, useEffect } from 'react'
import "./gamepage.css"
import BannerUnit from '../../components/Banner/BannerUnit'
import Image from "../../assets/images/default-image-min.jpg"
import { GameContext } from '../../Context/GameContext'
import {Link} from "react-router-dom"

import {decodeHTML} from "entities"
import LottieCorrect from './../../components/LottieUnits/LottieCorrect';
import LottieWrong from '../../components/LottieUnits/LottieWrong'


const GamePage = () => {
    const {gameQA, shuffleArray} = useContext(GameContext)
    const {currentIndex, setCurrentIndex} = useContext(GameContext)

    const [answerList, setAnswerList] = useState([])
    const [userAnswer, setUserAnswer] = useState(null)
    const [isCompleted, setIsCompleted]= useState(false)

    //GET DATA
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
    }

    //HANDLE NEXT
    const handleNext = () =>{
        setUserAnswer(null) //clear state

        if(currentIndex===9){
            setIsCompleted(true)
            setCurrentIndex(0)
            return
        }else{
            setCurrentIndex(currentIndex+1)
        }
    }
    //HANDLE TRUE ANSWER
    if(userAnswer===true){
        return (
            <div className="">
            <LottieCorrect/>
            <BannerUnit bannerImage="">Correct Answer</BannerUnit>
            <button onClick={handleNext}>Next</button>
            </div>
        )
    }
    //HANDLE WRONG ANSWER
    if(userAnswer===false){
        return (
            <div className="">
            <LottieWrong/>
            <BannerUnit bannerImage="">Wrong Answer</BannerUnit>
            <button onClick={handleNext}>Next</button>
            </div>
        )
    }
    //HANDLE GAME COMPLETED
    if(isCompleted){
        return (
            <div className="">
            <BannerUnit bannerImage={Image}>Game is Completed</BannerUnit>
            <Link to="/"><button>Back Home</button></Link> 
            </div>
        )
    }

    //GAME Question/Answer
    return(
        <>
            <BannerUnit bannerImage={Image}>{decodeHTML(gameQA[currentIndex].question)}</BannerUnit>
            {
            answerList.map((x,index)=>{
                return <button key={index} value={x} onClick={handleAnswer}>{decodeHTML(x)}</button>
            })
            }
        </>
    )
}

export default GamePage
