import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner/Banner';

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	const [result, setResult] = React.useState('');
	console.info({ answer });

	if (!result && guesses.length === 6) {
		setResult('lose');
	}

	const resetGame = () => {
		setGuesses([]);
		setAnswer(sample(WORDS));
		setResult('');
	};

	const newGuess = word => {
		setGuesses([...guesses, word]);
		if (word === answer) {
			setResult('win');
		}
	};

	return (
		<>
			<GuessList guesses={guesses} answer={answer} />
			<GuessInput addGuess={newGuess} res={result} />
			{result && (
				<Banner
					result={result}
					resetGame={resetGame}
					numOfAttempt={guesses.length}
					answer={answer}
				/>
			)}
		</>
	);
}

export default Game;
