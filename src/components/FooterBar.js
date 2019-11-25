import React from 'react';
import styled from '@emotion/styled';
import { noop } from 'lodash';

import Card from './Card';
import View from './View';
import Button from './Button';
import Flexy from './Flexy';
import SwatchPicker from './SwatchPicker';

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
					<Flexy>
						<Flexy.Item>
							<ActionButton
								onClick={onGenerateSimilarColors}
								width={100}
								size="lg"
							>
								Refine
							</ActionButton>
						</Flexy.Item>
						<Flexy.Item>
							<ActionButton
								onClick={onGenerateRandomColors}
								width={100}
								variant="primary"
								size="lg"
							>
								Regen
							</ActionButton>
						</Flexy.Item>
					</Flexy>
				</Flexy>
			</Container>
		</Bar>
	);
}

const ActionButton = styled(Button)`
	width: 110px;

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
