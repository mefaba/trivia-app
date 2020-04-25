import React, { useContext } from "react";
import "./navbar.css";
import { GameContext } from "../../Context/GameContext";

const NavbarInformation = (props) => {
	const { currentIndex, gameState } = useContext(GameContext);

	/* console.log("Navbar'da",props) */
	return (
        <div className="navbar">

            {
              gameState.started ? <>QUESTİON {currentIndex + 1}/10</> 
            :"ARE YOU READY?"
                
            }
            
        </div>
        
    )

};

export default NavbarInformation;
