import React from 'react';
import styled from '@emotion/styled';

import Logo from './Logo';
import { transitions } from '../styles/transitions';

export default function AppBar() {
	return (
		<Bar>
			<Logo />
		</Bar>
	);
}

const Bar = styled.div`
	${transitions};
	background: var(--mainColor);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 10px 20px;
	z-index: 10;
`;
