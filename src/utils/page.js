import queryString from 'query-string';
import { getInitialColorValue } from './colors';

export const BASE_TITLE = 'Recolor';

export function createPageTitle(color) {
	return `${BASE_TITLE} || ${color}`;
}

export function getInitialColorFromUrl() {
	const { color } = queryString.parse(window.location.search);
	return getInitialColorValue(color);
}
