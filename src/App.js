import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import colorize from 'tinycolor2';

import Alphabet from './components/Alphabet';
import Label from './components/Label';
import LoremTitle from './components/LoremTitle';
import LoremBody from './components/LoremBody';
import Swatch from './components/Swatch';
import Spacer from './components/Spacer';

function generateColors(nextColor) {
	const data = colorize(nextColor).splitcomplement();
	const triad = data.map(d => d.toHexString());

	let [color, accent, text] = triad;
	const isLight = colorize.isReadable('#000', color, {
		level: 'AAA',
		size: 'small',
	});

	if (isLight) {
		accent = colorize(accent)
			.darken(40)
			.toHexString();

		accent = colorize
			.mostReadable(color, [accent], {
				includeFallbackColors: true,
				level: 'AA',
				size: 'large',
			})
			.toHexString();

		text = colorize(color)
			.darken(60)
			.toHexString();
	} else {
		accent = colorize(accent)
			.lighten(20)
			.toHexString();

		text = colorize(color)
			.lighten(60)
			.toHexString();
	}

	let ui = colorize(color);

	if (isLight) {
		ui = ui.lighten(20).toHexString();
	} else {
		ui = ui.darken(20).toHexString();
	}

	return {
		color,
		accent,
		text,
		isLight,
		ui,
	};
}

const initialColors = generateColors(randomColor());

function App() {
	const [mainColor, setMainColor] = useState(initialColors.color);
	const [accentColor, setAccentColor] = useState(initialColors.accent);
	const [textColor, setTextColor] = useState(initialColors.text);
	const [isColorLight, setIsColorLight] = useState(initialColors.isLight);
	const [uiColor, setUiColor] = useState(initialColors.ui);

	useEffect(() => {
		const node = document.documentElement;
		node.style.setProperty(`--mainColor`, mainColor);
		node.style.setProperty(`--accentColor`, accentColor);
		node.style.setProperty(`--textColor`, textColor);
		node.style.setProperty(`--uiColor`, uiColor);
	}, [mainColor, accentColor, textColor, uiColor]);

	const setNewColors = colorData => {
		const { color, accent, text, isLight, ui } = colorData;
		setMainColor(color);
		setAccentColor(accent);
		setTextColor(text);
		setIsColorLight(isLight);
		setUiColor(ui);
	};

	const handleGenerateRandomColors = () => {
		const colorData = generateColors(randomColor());
		setNewColors(colorData);
	};

	const handleGenerateSimilarColors = () => {
		const nextColors = colorize(mainColor)
			.analogous()
			.map(c => c.toHexString());
		const [, nextColor] = nextColors;
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	const handleGenerateOppositeColors = () => {
		const nextColors = colorize(mainColor)
			.splitcomplement()
			.map(c => c.toHexString());
		const [, , nextColor] = nextColors;
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	const handleLightenColors = () => {
		const nextColor = colorize(mainColor)
			.lighten(10)
			.toHexString();
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	const handleDarkenColors = () => {
		const nextColor = colorize(mainColor)
			.darken(10)
			.toHexString();
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	return (
		<>
			<Layout>
				<Spacer size="xxl">
					<Label isMuted>Colors</Label>
					<Section>
						<SwatchBar>
							<Swatch
								bgColor={uiColor}
								label="Main"
								color={mainColor}
							/>
							<Swatch
								bgColor={uiColor}
								label="Accent"
								color={accentColor}
							/>
							<Swatch
								bgColor={uiColor}
								label="Text"
								color={textColor}
							/>
							<Swatch
								bgColor={uiColor}
								label="UI"
								color={uiColor}
							/>
						</SwatchBar>
					</Section>
				</Spacer>

				<Label isMuted>Typography</Label>
				<Accent style={{ backgroundColor: accentColor }} />
				<Section>
					<Body>
						<LoremTitle style={{ color: accentColor }} />
					</Body>
					<Sidebar>
						<Spacer>
							<Label isMuted>Text</Label>
							<Alphabet style={{ color: accentColor }} />
						</Spacer>
					</Sidebar>
				</Section>
				<Section>
					<Body>
						<LoremBody />
					</Body>
					<Sidebar>
						<Spacer>
							<Label isMuted>Text</Label>
							<Alphabet />
						</Spacer>
					</Sidebar>
				</Section>
			</Layout>
			<FooterBar style={{ backgroundColor: uiColor }}>
				<Container>
					<button onClick={handleGenerateRandomColors}>
						Randomize
					</button>
					<span>||</span>
					<button onClick={handleGenerateSimilarColors}>
						Similar
					</button>
					<button onClick={handleGenerateOppositeColors}>
						Opposite
					</button>
					<span>||</span>
					<button onClick={handleDarkenColors}>Darken</button>
					<button onClick={handleLightenColors}>Lighten</button>
				</Container>
			</FooterBar>
		</>
	);
}

const Layout = styled.div`
	max-width: 920px;
	padding: 20px;
	margin: 5vh auto;
`;

const Section = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

const Accent = styled.div`
	width: 32px;
	height: 4px;
	margin: 24px 0 16px;
`;

const Body = styled.div`
	flex: 1;
`;

const SwatchBar = styled.div`
	display: flex;
	> * {
		margin-right: 8px;
	}
`;

const Sidebar = styled.div`
	margin-left: 32px;
	width: 300px;
`;

const FooterBar = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 40px 20px;
`;

const Container = styled.div`
	max-width: 600px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
`;

export default App;
