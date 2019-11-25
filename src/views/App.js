import React from 'react';

import AppBar from '../components/AppBar';
import FooterBar from '../components/FooterBar';
import Layout from '../components/Layout';
import SampleColors from '../samples/SampleColors';
import SampleTypography from '../samples/SampleTypography';
import Spacer from '../components/Spacer';

import { useStore } from '../store';

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
		setNewColors,
	} = useStore();

	return (
		<>
			<AppBar />
			<Layout>
				<SampleColors
					{...{
						accentColor,
						mainColor,
						textColor,
						uiColor,
						setNewColors,
					}}
				/>
				<Spacer size="md">
					<SampleTypography
						{...{
							bodyFont,
							titleFont,
							accentColor,
							onGenerateRandomFonts: generateRandomFonts,
						}}
					/>
				</Spacer>
			</Layout>
			<FooterBar
				{...{
					onGenerateRandomColors: generateRandomColors,
					onGenerateSimilarColors: generateSimilarColors,
					mainColor,
					uiColor,
					setNewColors,
				}}
			/>
		</>
	);
}

export default App;
