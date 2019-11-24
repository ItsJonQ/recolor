import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import colorize from 'tinycolor2';

import AppBar from './components/AppBar';
import FooterBar from './components/FooterBar';
import Layout from './components/Layout';
import SampleColors from './samples/SampleColors';
import SampleTypography from './samples/SampleTypography';
import Spacer from './components/Spacer';

import {
	generateColors,
	generateRandomFont,
	setColorProperties,
} from './utils';

const initialColors = generateColors(randomColor());

function App() {
	const [mainColor, setMainColor] = useState(initialColors.color);
	const [accentColor, setAccentColor] = useState(initialColors.accent);
	const [textColor, setTextColor] = useState(initialColors.text);
	const [uiColor, setUiColor] = useState(initialColors.ui);
	const [titleFont, setTitleFont] = useState(generateRandomFont());
	const [bodyFont, setBodyFont] = useState(generateRandomFont());

	useEffect(() => {
		setColorProperties({
			mainColor,
			accentColor,
			textColor,
			uiColor,
			titleFont,
			bodyFont,
		});
	}, [mainColor, accentColor, textColor, uiColor, titleFont, bodyFont]);

	const handleGenerateRandomFonts = () => {
		setTitleFont(generateRandomFont());
		setBodyFont(generateRandomFont());
	};

	const setNewColors = colorData => {
		const { color, accent, text, ui } = colorData;
		setMainColor(color);
		setAccentColor(accent);
		setTextColor(text);
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
			<AppBar />
			<Layout>
				<Spacer size="xxl">
					<SampleColors
						{...{ accentColor, mainColor, textColor, uiColor }}
					/>
				</Spacer>

				<Spacer size="md">
					<SampleTypography
						{...{ bodyFont, titleFont, accentColor }}
					/>
				</Spacer>
			</Layout>
			<FooterBar
				{...{
					handleGenerateRandomColors,
					handleGenerateSimilarColors,
					handleDarkenColors,
					handleLightenColors,
					handleGenerateRandomFonts,
					uiColor,
				}}
			/>
		</>
	);
}

export default App;
