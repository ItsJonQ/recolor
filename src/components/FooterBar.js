import React from 'react';
import styled from '@emotion/styled';
import { noop } from 'lodash';

import Button from './Button';
import Card from './Card';
import Flexy from './Flexy';
import SwatchPicker from './SwatchPicker';
import View from './View';
import Viewport from './Viewport';

export default function FooterBar({
	onGenerateRandomColors = noop,
	onGenerateSimilarColors = noop,
	setNewColors = noop,
	mainColor,
	uiColor,
}) {
	return (
		<Bar bg={uiColor}>
			<Container>
				<Flexy>
					<Viewport.Desktop>
						<Flexy.Item>
							<SwatchContainer>
								<SwatchPicker
									color={mainColor}
									setNewColors={setNewColors}
									placement="top-start"
									textAlign="center"
								/>
							</SwatchContainer>
						</Flexy.Item>
					</Viewport.Desktop>
					<ActionWrapper>
						<Flexy.Item>
							<ActionButton
								onClick={onGenerateSimilarColors}
								width={100}
								size="lg"
							>
								Refine
							</ActionButton>
						</Flexy.Item>
						<Viewport.Mobile>
							<Flexy.Block />
						</Viewport.Mobile>
						<Flexy.Item>
							<ActionButton
								onClick={onGenerateRandomColors}
								width={100}
								variant="primary"
								size="lg"
							>
								<Viewport.Mobile>Regen</Viewport.Mobile>
								<Viewport.Desktop>Regenerate</Viewport.Desktop>
							</ActionButton>
						</Flexy.Item>
					</ActionWrapper>
				</Flexy>
			</Container>
		</Bar>
	);
}

function ActionWrapper({ children }) {
	return (
		<>
			<Viewport.Mobile>{children}</Viewport.Mobile>
			<Viewport.Desktop>
				<Flexy>
					<Flexy.Block />
					{children}
				</Flexy>
			</Viewport.Desktop>
		</>
	);
}

const ActionButton = styled(Button)`
	width: 140px;

	@media (min-width: 768px) {
		width: 150px;
	}
`;

const Bar = styled(Card)`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 8px 0px;
	z-index: 20;
`;

const SwatchContainer = styled(View)`
	position: relative;
	top: -24px;
	margin-bottom: -40px;
`;

const Container = styled(View)`
	max-width: 920px;
	margin: auto;
	padding: 0 20px;
`;
