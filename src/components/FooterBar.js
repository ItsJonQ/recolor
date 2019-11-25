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
					<Flexy.Block />
					<Flexy.Item>
						<Button
							onClick={onGenerateRandomColors}
							width={100}
							size="lg"
						>
							Regen
						</Button>
					</Flexy.Item>
					<Flexy.Item>
						<SwatchContainer>
							<SwatchPicker
								color={mainColor}
								setNewColors={setNewColors}
								placement="top"
								textAlign="center"
							/>
						</SwatchContainer>
					</Flexy.Item>
					<Flexy.Item>
						<Button
							onClick={onGenerateSimilarColors}
							width={100}
							isPrimary
							size="lg"
						>
							Refine
						</Button>
					</Flexy.Item>
					<Flexy.Block />
				</Flexy>
			</Container>
		</Bar>
	);
}

const Bar = styled(Card)`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 8px 0px;
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
