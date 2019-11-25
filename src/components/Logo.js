import React from 'react';
import styled from '@emotion/styled';
import { transitions } from '../styles/transitions';

export default function Logo() {
	return (
		<LogoText>
			<span>RE</span>COLOR
		</LogoText>
	);
}

const LogoText = styled.div`
	font-family: var(--fontFamilyCode);
	font-size: 13px;
	font-weight: bold;
	text-transform: uppercase;

	span {
		${transitions};
		color: var(--accentColor);
	}
`;
