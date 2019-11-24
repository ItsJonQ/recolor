import { sample } from 'lodash';

export const FONTS = [
	'Alata',
	'Arimo',
	'Barlow',
	'Calistoga',
	'Heebo',
	'Ibarra Real Nova',
	'Lato',
	'Libre Baskerville',
	'Libre Franklin',
	'Lora',
	'Merriweather',
	'Nunito',
	'Open Sans',
	'Playfair Display',
	'Poppins',
	'Roboto',
	'Roboto Slab',
];

export function generateRandomFont() {
	return sample(FONTS);
}
