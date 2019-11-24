import React from 'react';
import styled from '@emotion/styled';

import Box from '../components/View';
import Label from '../components/Label';
import Flexy from '../components/Flexy';
import Spacer from '../components/Spacer';
import Swatch from '../components/Swatch';
import Section from '../components/Section';
import Viewport from '../components/Viewport';

function Swatches({ mainColor, accentColor, textColor, uiColor }) {
	return (
		<>
			<Box mb={2}>
				<Swatch bgColor={uiColor} label="Main" color={mainColor} />
			</Box>
			<Box mb={2}>
				<Swatch bgColor={uiColor} label="Accent" color={accentColor} />
			</Box>
			<Box mb={2}>
				<Swatch bgColor={uiColor} label="Text" color={textColor} />
			</Box>
			<Box mb={2}>
				<Swatch bgColor={uiColor} label="UI" color={uiColor} />
			</Box>
		</>
	);
}

export default function SampleColors(props) {
	return (
		<>
			<Viewport.Desktop>
				<DesktopContainer>
					<Label isMuted>Colors</Label>
					<Swatches {...props} />
				</DesktopContainer>
			</Viewport.Desktop>
			<Viewport.Mobile>
				<Spacer size="xxl">
					<Label isMuted>Colors</Label>
					<Section>
						<Flexy>
							<Swatches {...props} />
						</Flexy>
					</Section>
				</Spacer>
			</Viewport.Mobile>
		</>
	);
}

const DesktopContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 70px;
	left: 20px;
	z-index: 9;
`;
