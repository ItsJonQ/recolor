import React from 'react';
import styled from '@emotion/styled';
import Label from './Label';
import { transitions } from '../styles/transitions';

export default function Swatch(props) {
	const { bgColor, color, label } = props;

	return (
		<Card style={{ backgroundColor: bgColor }}>
			<Color style={{ backgroundColor: color }} />
			<LabelWrapper>
				<Label size="sm" style={{ margin: 0 }}>
					{label}
				</Label>
				<Label size="xs" isMuted style={{ marginBottom: 4 }}>
					{color}
				</Label>
			</LabelWrapper>
		</Card>
	);
}

const Card = styled.div`
	${transitions};
	--padding: 4px;
	box-shadow: 0 0 0 -1px rgba(0, 0, 0, 0.09), 0px 2px 4px rgba(0, 0, 0, 0.09),
		0px 10px 20px rgba(0, 0, 0, 0.09);
	padding: var(--padding);
	width: calc(48px + var(--padding) * 2);

	@media (min-width: 768px) {
		width: calc(60px + var(--padding) * 2);
	}
`;

const Color = styled.div`
	${transitions};
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	height: 0;
	padding-bottom: 65%;
	width: 100%;

	@media (min-width: 768px) {
		padding-bottom: 75%;
	}
`;

const LabelWrapper = styled.div`
	padding: 4px 0 0;
`;
