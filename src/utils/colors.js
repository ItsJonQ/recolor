import { sample } from 'lodash';
import randomColor from 'randomcolor';
import colorize from 'tinycolor2';

function shouldRegenerateColor(color) {
	const colorHex = color.toLowerCase();
	/**
	 * Avoid using black or white
	 */
	const shouldTryAgain = colorHex === '#000000' || colorHex === '#ffffff';

	return shouldTryAgain;
}

export function generateRandomColor() {
	const nextColor = sample([randomColor(), '#ffffff']);
	const adjustmentRange = [0, 5, 10, 15, 20];
	const adjustments = ['lighten', 'darken', false];

	const adjustment = sample(adjustments);
	const range = sample(adjustmentRange);

	if (shouldRegenerateColor(nextColor)) {
		return generateRandomColor();
	}

	if (!adjustment) {
		return nextColor;
	}

	const colorData = colorize(nextColor);
	const nextRandomColor = colorData[adjustment](range).toHexString();

	if (shouldRegenerateColor(nextRandomColor)) {
		return generateRandomColor();
	}

	return nextRandomColor;
}

export function generateColors(nextColor, options = {}) {
	const defaultOptions = { debug: false };
	const mergedOptions = { ...defaultOptions, ...options };
	const { debug } = mergedOptions;

	const data = colorize(nextColor).splitcomplement();
	const complement = data.map(d => d.toHexString());

	let [color, accent, text] = complement;
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

	const colors = {
		color,
		accent,
		text,
		isLight,
		ui,
	};

	if (!debug) {
		return colors;
	}

	const debugData = {
		complement,
		isLight,
	};

	return {
		...colors,
		debug: debugData,
	};
}

export function setColorProperties(props) {
	const node = document.documentElement;
	const keys = Object.keys(props);
	keys.forEach(key => {
		const value = props[key];
		node.style.setProperty(`--${key}`, value);
	});
}
