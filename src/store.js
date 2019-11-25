import { useState, useEffect } from 'react';
import colorize from 'tinycolor2';
import queryString from 'query-string';

import { useRouter } from './utils/hooks';

import {
	generateRandomColor,
	generateColors,
	generateRandomFont,
	setColorProperties,
} from './utils';

const initialColor = getInitialColor();
const initialColors = generateColors(initialColor);

const BASE_TITLE = 'Recolor';

export function useStore() {
	const { history } = useRouter();

	const [mainColor, setMainColor] = useState(initialColors.color);
	const [accentColor, setAccentColor] = useState(initialColors.accent);
	const [textColor, setTextColor] = useState(initialColors.text);
	const [uiColor, setUiColor] = useState(initialColors.ui);
	const [titleFont, setTitleFont] = useState(generateRandomFont());
	const [bodyFont, setBodyFont] = useState(generateRandomFont());

	useEffect(() => {
		const didReloadPage = performance && performance.navigation.type === 1;
		if (didReloadPage) {
			window.document.location.search = '';
		}
	}, []);

	useEffect(() => {
		document.title = createPageTitle(mainColor);

		const searchQuery = queryString.stringify({
			color: mainColor,
		});

		history.replace({
			search: searchQuery,
		});
	}, [history, mainColor]);

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

	const setNewColors = newColor => {
		const colorData = generateColors(newColor);
		const { color, accent, text, ui } = colorData;
		setMainColor(color);
		setAccentColor(accent);
		setTextColor(text);
		setUiColor(ui);
	};

	const generateRandomColors = () => {
		setNewColors(generateRandomColor());
	};

	const generateSimilarColors = () => {
		const nextColors = colorize(mainColor)
			.analogous()
			.map(c => c.toHexString());
		const [, nextColor] = nextColors;
		setNewColors(nextColor);
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
		setNewColors,
	};
}

function createPageTitle(color) {
	return `${BASE_TITLE} || ${color}`;
}

function getInitialColor() {
	const { color } = queryString.parse(window.location.search);
	const initialColorData = colorize(color);

	if (!initialColorData._ok) {
		return generateRandomColor();
	}

	return initialColorData.toHexString();
}
