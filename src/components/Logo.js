import React from 'react';
import styled from '@emotion/styled';

export default function Logo() {
	return (
		<LogoText>
			<span>⏣</span> Chroma
		</LogoText>
	);
}

const LogoText = styled.div`
	font-size: 13px;
	font-weight: bold;

	span {
		color: var(--accentColor);
		position: relative;
		top: 0px;
		font-size: 18px;
		margin-right: 3px;
	}
`;
