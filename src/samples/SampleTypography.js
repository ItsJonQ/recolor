import React from 'react';
import styled from '@emotion/styled';

import Alphabet from '../components/Alphabet';
import Label from '../components/Label';
import LoremBody from '../components/LoremBody';
import LoremTitle from '../components/LoremTitle';
import Spacer from '../components/Spacer';
import Section from '../components/Section';

export default function SampleTypography({ accentColor, titleFont, bodyFont }) {
	return (
		<>
			<Spacer size="md">
				<Label isMuted>Typography</Label>
			</Spacer>
			<SectionContainer>
				<Body>
					<Section>
						<LoremTitle style={{ color: accentColor }} />
					</Section>
				</Body>
				<Sidebar>
					<Section>
						<Spacer>
							<Label isMuted>{titleFont}</Label>
							<Alphabet
								style={{
									color: accentColor,
									fontFamily: 'var(--titleFont)',
								}}
							/>
						</Spacer>
					</Section>
				</Sidebar>
			</SectionContainer>
			<SectionContainer>
				<Body>
					<Section>
						<LoremBody />
					</Section>
				</Body>
				<Sidebar>
					<Spacer>
						<Label isMuted>{bodyFont}</Label>
						<Alphabet
							style={{
								fontFamily: 'var(--bodyFont)',
							}}
						/>
					</Spacer>
				</Sidebar>
			</SectionContainer>
		</>
	);
}

const MQ = '768px';

const SectionContainer = styled.div`
	margin-bottom: 16px;

	@media (min-width: ${MQ}) {
		display: flex;
	}
`;

const Body = styled.div`
	flex: 1;
`;

const Sidebar = styled.div`
	@media (min-width: ${MQ}) {
		margin-left: 32px;
		width: 300px;
	}
`;
