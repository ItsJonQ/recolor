import { sample, inRange } from 'lodash';
import randomColor from 'randomcolor';
import colorize from 'tinycolor2';

// Cache, to ensure regeneration is a different hue
let __previousColorHueName = null;
function _setPreviousColorHueName(color) {
	__previousColorHueName = getColorHueName(color);
}
function _getPreviousColorHueName() {
	return __previousColorHueName;
}
function _isRepeatColor(color) {
	return _getPreviousColorHueName() === getColorHueName(color);
}

const BLACK = '#000000';
const WHITE = '#ffffff';

const RANDOM_COLOR_OPTIONS = {};
const IS_READABLE_OPTIONS = {
	level: 'AAA',
	size: 'small',
};
const MOST_READABLE_OPTIONS = {
	includeFallbackColors: false,
	level: 'AA',
	size: 'small',
};

const BRIGHTNESS_TWEAK = 10;
const SATURATION_TWEAK = 20;
const UI_BRIGHTNESS_TWEAK = 15;

function isNotBlack(color) {
	return color.toLowerCase() !== BLACK;
}

function isNotWhite(color) {
	return color.toLowerCase() !== WHITE;
}

function shouldRegenerateColor(color) {
	const colorHex = color.toLowerCase();

	const isMonochrome = colorHex === BLACK || colorHex === WHITE;
	const isRepeat = _isRepeatColor(color);

	const shouldTryAgain = isMonochrome || isRepeat;

	return shouldTryAgain;
}

export function getColorHueName(color) {
	const colorData = colorize(color).toHsv();
	const { h } = colorData;

	const hue = h > 334 ? 360 - h : h;

	if (hue === 0) {
		return 'monochrome';
	}

	if (hue < 19) {
		return 'red';
	}

	if (inRange(hue, 19, 46)) {
		return 'orange';
	}

	if (inRange(hue, 46, 62)) {
		return 'yellow';
	}

	if (inRange(hue, 63, 178)) {
		return 'green';
	}

	if (inRange(hue, 179, 257)) {
		return 'blue';
	}

	if (inRange(hue, 258, 282)) {
		return 'purple';
	}

	if (inRange(hue, 283, 334)) {
		return 'pink';
	}

	// Fallback to red (?)
	return 'red';
}

export function getLuminosityName(color) {
	const { l } = colorize(color).toHsl();
	if (l >= 0.6) {
		return 'bright';
	}
	if (l > 0.45 && l < 0.6) {
		return 'light';
	}
	return 'dark';
}

export function generateRandomColor() {
	const nextColor = randomColor(RANDOM_COLOR_OPTIONS);
	const adjustmentRange = [0, 5, 10, 15, 20];
	const adjustments = ['lighten', 'darken', false];

	const adjustment = sample(adjustments);
	const range = sample(adjustmentRange);

	if (shouldRegenerateColor(nextColor)) {
		return generateRandomColor();
	}

	if (!adjustment) {
		_setPreviousColorHueName(nextColor);
		return nextColor;
	}

	const colorData = colorize(nextColor);
	const nextRandomColor = colorData[adjustment](range).toHexString();

	if (shouldRegenerateColor(nextRandomColor)) {
		return generateRandomColor();
	}

	_setPreviousColorHueName(nextRandomColor);

	return nextRandomColor;
}

export function generateColors(nextColor, options = {}) {
	const defaultOptions = { debug: false };
	const mergedOptions = { ...defaultOptions, ...options };
	const { debug } = mergedOptions;

	const data = colorize(nextColor).splitcomplement();
	const complement = data.map(d => d.toHexString());

	let [color, accent] = complement;
	let text = color;

	const isLight = colorize.isReadable(BLACK, color, IS_READABLE_OPTIONS);
	const hueName = getColorHueName(color);

	if (isLight) {
		const darkenVariants = [20, 30, 40, 50, 55, 60, 65]
			.map(av =>
				colorize(accent)
					.darken(av)
					.toHexString()
			)
			.filter(isNotBlack);

		const darkenTextVariants = [20, 30, 40, 50, 55, 60, 65, 70, 80]
			.map(av =>
				colorize(text)
					.darken(av)
					.toHexString()
			)
			.filter(isNotBlack);

		accent = colorize
			.mostReadable(color, darkenVariants, MOST_READABLE_OPTIONS)
			.saturate(SATURATION_TWEAK)
			.toHexString();

		text = colorize
			.mostReadable(color, darkenTextVariants, MOST_READABLE_OPTIONS)
			.toHexString();
	} else {
		const lightenVariants = [10, 20, 25, 30, 35, 40]
			.map(av =>
				colorize(accent)
					.lighten(av)
					.toHexString()
			)
			.filter(isNotWhite);

		const lightenTextVariants = [10, 20, 25, 30, 35, 40, 50, 60, 70]
			.map(av =>
				colorize(text)
					.lighten(av)
					.toHexString()
			)
			.filter(isNotWhite);

		accent = colorize
			.mostReadable(color, lightenVariants, MOST_READABLE_OPTIONS)
			.saturate(SATURATION_TWEAK)
			.toHexString();

		text = colorize
			.mostReadable(color, lightenTextVariants, MOST_READABLE_OPTIONS)
			.toHexString();
	}

	let ui = colorize(color);

	if (isLight) {
		ui = ui.lighten(UI_BRIGHTNESS_TWEAK).toHexString();
	} else {
		ui = ui.darken(UI_BRIGHTNESS_TWEAK).toHexString();
	}

	const colors = {
		color,
		accent,
		text,
		isLight,
		ui,
		hueName,
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

export function getInitialColorValue(color) {
	const initialColorData = colorize(color);

	if (!initialColorData._ok) {
		return generateRandomColor();
	}

	return initialColorData.toHexString();
}

export function refineColor(color) {
	const luminosity = getLuminosityName(color);

	const nextColor = randomColor({
		luminosity,
		hue: getColorHueName(color),
	});

	return nextColor;
}

export function lightenColor(color) {
	const nextColor = colorize(color)
		.lighten(BRIGHTNESS_TWEAK)
		.toHexString();

	_setPreviousColorHueName(nextColor);

	return nextColor;
}

export function darkenColor(color) {
	const nextColor = colorize(color)
		.darken(BRIGHTNESS_TWEAK)
		.toHexString();

	_setPreviousColorHueName(nextColor);

	return nextColor;
}
