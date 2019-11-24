import React from 'react';

import AppBar from './components/AppBar';
import FooterBar from './components/FooterBar';
import Layout from './components/Layout';
import SampleColors from './samples/SampleColors';
import SampleTypography from './samples/SampleTypography';
import Spacer from './components/Spacer';

import { useStore } from './store';

function App() {
	const {
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
	} = useStore();

	const actions = {
		onDarkenColors: darkenColors,
		onGenerateRandomColors: generateRandomColors,
		onGenerateRandomFonts: generateRandomFonts,
		onGenerateSimilarColors: generateSimilarColors,
		onLightenColors: lightenColors,
	};

	return (
		<>
			<AppBar />
			<Layout>
				<SampleColors
					{...{ accentColor, mainColor, textColor, uiColor }}
				/>
				<Spacer size="md">
					<SampleTypography
						{...{ bodyFont, titleFont, accentColor }}
					/>
				</Spacer>
			</Layout>
			<FooterBar
				{...{
					...actions,
					uiColor,
				}}
			/>
		</>
	);
}

export default App;
