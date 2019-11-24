import React from 'react';
import styled from '@emotion/styled';
import { noop } from 'lodash';

import View from './View';
import Button from './Button';
import Flexy from './Flexy';
import Label from './Label';
import Viewport from './Viewport';

export default function FooterBar({
	handleGenerateRandomColors = noop,
	handleGenerateSimilarColors = noop,
	handleDarkenColors = noop,
	handleLightenColors = noop,
	handleGenerateRandomFonts = noop,
	uiColor,
}) {
	return (
		<Bar bg={uiColor}>
			<Container>
				<Flexy>
					<Flexy.Item>
						<Label isMuted size="sm">
							Colors
						</Label>
						<Flexy>
							<Flexy.Item>
								<Button
									isPrimary
									onClick={handleGenerateRandomColors}
								>
									Randomize
								</Button>
							</Flexy.Item>
							<Viewport.Desktop>
								<Flexy.Item>
									<Button
										onClick={handleGenerateSimilarColors}
									>
										Refine
									</Button>
								</Flexy.Item>
								<Flexy.Item>
									<Button onClick={handleDarkenColors}>
										Darken
									</Button>
									<Button onClick={handleLightenColors}>
										Lighten
									</Button>
								</Flexy.Item>
							</Viewport.Desktop>
						</Flexy>
					</Flexy.Item>
					<Flexy.Item>
						<Label isMuted size="sm" textAlign="right">
							Fonts
						</Label>
						<Button onClick={handleGenerateRandomFonts}>
							Remix
						</Button>
					</Flexy.Item>
				</Flexy>
			</Container>
		</Bar>
	);
}

const Bar = styled(View)`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 32px 0px;
`;

const Container = styled(View)`
	max-width: 920px;
	margin: auto;
	padding: 0 20px;
`;
