import React from 'react';
import Label from '../components/Label';
import Flexy from '../components/Flexy';
import Swatch from '../components/Swatch';
import Section from '../components/Section';

export default function SampleColors({
	mainColor,
	accentColor,
	textColor,
	uiColor,
}) {
	return (
		<>
			<Label isMuted>Colors</Label>
			<Section>
				<Flexy>
					<Swatch bgColor={uiColor} label="Main" color={mainColor} />
					<Swatch
						bgColor={uiColor}
						label="Accent"
						color={accentColor}
					/>
					<Swatch bgColor={uiColor} label="Text" color={textColor} />
					<Swatch bgColor={uiColor} label="UI" color={uiColor} />
				</Flexy>
			</Section>
		</>
	);
}
