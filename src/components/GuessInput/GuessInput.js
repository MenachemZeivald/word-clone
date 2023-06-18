import React from 'react';

function GuessInput({ addGuess, res }) {
	const [guess, setGuess] = React.useState('');

	const submitHandler = e => {
		e.preventDefault();
		addGuess(guess);
		setGuess('');
	};

	return (
		<form onSubmit={submitHandler} className='guess-input-wrapper'>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				required
				pattern='[a-zA-Z]{5}'
				minLength={5}
				maxLength={5}
				disabled={res}
				value={guess}
				onChange={e => setGuess(e.target.value.toUpperCase())}
			/>
		</form>
	);
}

export default GuessInput;
