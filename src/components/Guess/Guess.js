import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
	const result = checkGuess(guess, answer);
	return (
		<p className='guess'>
			{range(5).map(num => (
				<span key={num} className={`${result ? 'cell ' + result[num].status : 'cell'}`}>
					{result ? result[num].letter : ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
