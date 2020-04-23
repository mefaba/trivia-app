import React, { useContext } from 'react'
import "./navbar.css"
import { GameContext } from '../../Context/GameContext'

const NavbarInformation = () => {
    const {currentIndex} = useContext(GameContext)
    return (
        <div className="navbar">
            QUESTİON {currentIndex+1}/10
        </div>
    )
}

export default NavbarInformation
