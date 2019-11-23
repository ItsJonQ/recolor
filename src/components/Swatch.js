import React from 'react';
import styled from '@emotion/styled';
import Label from './Label';

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
	--padding: 4px;
	box-shadow: 0 0 0 -1px rgba(0, 0, 0, 0.09), 0px 2px 4px rgba(0, 0, 0, 0.09),
		0px 10px 20px rgba(0, 0, 0, 0.09);
	padding: var(--padding);
	width: calc(60px + var(--padding) * 2);
	transition: all 200ms ease;
`;

const Color = styled.div`
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	height: 0;
	padding-bottom: 75%;
	transition: all 200ms ease;
	width: 100%;
`;

const LabelWrapper = styled.div`
	padding: 4px 0 0;
`;
