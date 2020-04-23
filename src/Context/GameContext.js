import React, { useState } from "react";

export const GameContext = React.createContext();

const GameProvider = (props) => {
    const [gameQA, setGameQA] = useState();
    const [currentIndex,setCurrentIndex] = useState(0)

	function shuffleArray(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
	return (
		<GameContext.Provider
			value={{
				gameQA,
				setGameQA,
                shuffleArray,
                currentIndex,
                setCurrentIndex
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};

export default GameProvider;
