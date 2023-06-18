import React from 'react';

function Banner({ result, numOfAttempt, resetGame, answer }) {
	return result === 'win' ? (
		<div className='happy banner'>
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong> {numOfAttempt} guesses</strong>.
			</p>
			<div onClick={resetGame}>Play again</div>
		</div>
	) : (
		<div className='sad banner'>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
			<div onClick={resetGame}>Play again</div>
		</div>
	);
}
export default Banner;
