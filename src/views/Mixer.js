import React, { useState } from 'react';
import styled from '@emotion/styled';
import { generateRandomColor, generateColors } from '../utils';

import Button from '../components/Button';
import Flexy from '../components/Flexy';
import Label from '../components/Label';
import Spacer from '../components/Spacer';
import Swatch from '../components/Swatch';
import View from '../components/View';

import { transitions } from '../styles/transitions';

export default function Mixer() {
	const [color, setColor] = useState(generateRandomColor());
	const regenerateColor = () => setColor(generateRandomColor());
	const colors = generateColors(color, { debug: true });

	const {
		accent,
		text,
		debug: { complement, isLight },
	} = colors;
	const originalComp = {
		color: complement[0],
		accent: complement[1],
		other: complement[2],
	};

	return (
		<Canvas>
			<View minWidth={0} width={720} maxWidth="100%">
				<Spacer size="xxl">
					<Label>MIXER</Label>
					<Label size="sm" isMuted>
						For (color) science
					</Label>
					<Button variant="primary" onClick={regenerateColor}>
						REGENERATE
					</Button>
				</Spacer>
				<Flexy align="top" gap="xxl" justify="left">
					<Flexy.Item>
						<Label>START</Label>
						<Swatch color={color} label="START" />
						<Spacer />
						<Label isMuted size="xs">
							{isLight ? 'LIGHT' : 'DARK'}
						</Label>
					</Flexy.Item>
					<Flexy.Item>
						<Spacer>
							<Flexy gap="xl" align="top">
								<Flexy.Item>
									<Label>ORGNL COMP.</Label>
									<Swatch
										color={originalComp.color}
										label="CLR"
									/>
									<Swatch
										color={originalComp.accent}
										label="ACCNT"
									/>
									<Swatch
										color={originalComp.other}
										label="OTHR"
									/>
								</Flexy.Item>
								<Flexy.Item>
									<Label>SMPL</Label>
									<Sampler
										bg={originalComp.color}
										color={originalComp.accent}
									>
										Aa
									</Sampler>
									<Sampler
										bg={originalComp.color}
										color={originalComp.other}
									>
										Aa
									</Sampler>
								</Flexy.Item>
							</Flexy>
						</Spacer>
						<Flexy gap="xl" align="top">
							<Flexy.Item>
								<Label>ENHNCD COMP.</Label>
								<Swatch color={color} label="CLR" />
								<Swatch color={accent} label="ACCNT" />
								<Swatch color={text} label="TEXT" />
							</Flexy.Item>
							<Flexy.Item>
								<Label>SMPL</Label>
								<Sampler bg={color} color={accent}>
									Aa
								</Sampler>
								<Sampler bg={color} color={text}>
									Aa
								</Sampler>
							</Flexy.Item>
						</Flexy>
					</Flexy.Item>
				</Flexy>
			</View>
		</Canvas>
	);
}

function Sampler(props) {
	return (
		<SamplerView mb={2} {...props}>
			<Flexy.Block>Aa</Flexy.Block>
		</SamplerView>
	);
}

const Canvas = styled(Flexy)`
	width: 100%;
	max-width: 100%;
	min-height: 100vh;
	justify-content: center;
	padding: 40px 20px;
`;

const SamplerView = styled(Flexy)`
	${transitions};
	padding: 10px;
	width: 65px;
	height: 45px;
	text-align: center;
	line-height: 1;
	font-weight: bold;
`;
