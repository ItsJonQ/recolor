import { useCallback, useState, useEffect } from 'react';
import queryString from 'query-string';

import { useRouter } from './utils/hooks';

import {
	createPageTitle,
	darkenColor,
	generateColors,
	generateRandomColor,
	generateRandomFont,
	getInitialColorFromUrl,
	lightenColor,
	refineColor,
	setColorProperties,
} from './utils';

const initialColor = getInitialColorFromUrl();
const initialColors = generateColors(initialColor);

export function useStore() {
	const { history } = useRouter();

	// STATE
	const [mainColor, setMainColor] = useState(initialColors.color);
	const [accentColor, setAccentColor] = useState(initialColors.accent);
	const [textColor, setTextColor] = useState(initialColors.text);
	const [uiColor, setUiColor] = useState(initialColors.ui);
	const [titleFont, setTitleFont] = useState(generateRandomFont());
	const [bodyFont, setBodyFont] = useState(generateRandomFont());

	// ACTIONS
	const generateRandomFonts = () => {
		setTitleFont(generateRandomFont());
		setBodyFont(generateRandomFont());
	};

	const setNewColors = useCallback(
		newColor => {
			const colorData = generateColors(newColor);
			const { color, accent, text, ui } = colorData;
			setMainColor(color);
			setAccentColor(accent);
			setTextColor(text);
			setUiColor(ui);
		},
		[setMainColor, setAccentColor, setTextColor, setUiColor]
	);

	const generateRandomColors = useCallback(() => {
		setNewColors(generateRandomColor());
	}, [setNewColors]);

	const generateSimilarColors = useCallback(() => {
		const nextColor = refineColor(mainColor);
		setNewColors(nextColor);
	}, [setNewColors, mainColor]);

	const lightenColors = () => {
		const nextColor = lightenColor(mainColor);
		setNewColors(nextColor);
	};

	const darkenColors = () => {
		const nextColor = darkenColor(mainColor);
		setNewColors(nextColor);
	};

	// EFFECTS
	useEffect(() => {
		const handleOnKeyDown = event => {
			const { key } = event;
			switch (key) {
				case 'ArrowLeft':
					generateSimilarColors();
					break;
				case 'ArrowRight':
					generateRandomColors();
					break;
				default:
					break;
			}
		};
		document.addEventListener('keydown', handleOnKeyDown);

		return () => {
			document.removeEventListener('keydown', handleOnKeyDown);
		};
	}, [generateRandomColors, generateSimilarColors]);

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
