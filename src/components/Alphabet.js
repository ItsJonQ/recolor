import React from 'react';
import View from './View';

export default function Alphabet(props) {
	return (
		<View {...props} fontSize={['0.84rem', '0.92rem']}>
			<strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ</strong>
			<br />
			abcdefghijklmnopqrstuvwxyz
			<br />
			1234567890!@#$%^&*()_+=
			<br />
		</View>
	);
}
