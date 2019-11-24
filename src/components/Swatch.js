import React from 'react';
import styled from '@emotion/styled';

import Card from './Card';
import Label from './Label';
import View from './View';
import { transitions } from '../styles/transitions';

export default function Swatch(props) {
	const { bgColor, color, label } = props;

	return (
		<SwatchCard bg={bgColor}>
			<Color bg={color} />
			<View pt={1}>
				<Label size="xs" mb={0}>
					{label}
				</Label>
				<Label size="xs" isMuted mb={1}>
					{color}
				</Label>
			</View>
		</SwatchCard>
	);
}

const SwatchCard = styled(Card)`
	${transitions};
	--padding: 4px;
	padding: var(--padding);
	width: calc(48px + var(--padding) * 2);

	@media (min-width: 768px) {
		width: calc(60px + var(--padding) * 2);
	}
`;

const Color = styled(View)`
	${transitions};
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	height: 0;
	padding-bottom: 65%;
	width: 100%;

	@media (min-width: 768px) {
		padding-bottom: 75%;
	}
`;
