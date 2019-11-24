import { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import colorize from 'tinycolor2';

import {
	generateColors,
	generateRandomFont,
	setColorProperties,
} from './utils';

const initialColors = generateColors(randomColor());

export function useStore() {
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

	const generateRandomFonts = () => {
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

	const generateRandomColors = () => {
		const colorData = generateColors(randomColor());
		setNewColors(colorData);
	};

	const generateSimilarColors = () => {
		const nextColors = colorize(mainColor)
			.analogous()
			.map(c => c.toHexString());
		const [, nextColor] = nextColors;
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	const lightenColors = () => {
		const nextColor = colorize(mainColor)
			.lighten(10)
			.toHexString();
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	const darkenColors = () => {
		const nextColor = colorize(mainColor)
			.darken(10)
			.toHexString();
		const colorData = generateColors(nextColor);
		setNewColors(colorData);
	};

	return {
		// STATE
		mainColor,
		accentColor,
		textColor,
		uiColor,
		titleFont,
		bodyFont,
		// ACTIONS
		generateRandomFonts,
		generateRandomColors,
		generateSimilarColors,
		lightenColors,
		darkenColors,
	};
}
