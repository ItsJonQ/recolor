import React from 'react';
import styled from '@emotion/styled';

export default function Alphabet(props) {
	return (
		<FontStyles {...props}>
			<strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ</strong>
			<br />
			abcdefghijklmnopqrstuvwxyz
			<br />
			1234567890!@#$%^&*()_+=
			<br />
		</FontStyles>
	);
}

const FontStyles = styled.div``;
