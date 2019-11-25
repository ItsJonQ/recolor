import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Manager, Reference, Popper } from 'react-popper';

import Box from '../components/View';
import ColorPicker from '../components/ColorPicker';
import Flexy from '../components/Flexy';
import Label from '../components/Label';
import Section from '../components/Section';
import Spacer from '../components/Spacer';
import Swatch from '../components/Swatch';
import View from '../components/View';
import Viewport from '../components/Viewport';

function MainColorSwatch({ mainColor, setNewColors }) {
	const [isOpen, setOpen] = useState(false);
	const popperRef = useRef(null);

	useEffect(() => {
		const node = popperRef.current;
		const handleBodyClick = event => {
			const { target } = event;

			if (node !== target && !node.contains(target)) {
				setOpen(false);
			}
		};

		if (node && isOpen) {
			document.addEventListener('click', handleBodyClick);
		}

		return () => {
			if (node && isOpen) {
				document.removeEventListener('click', handleBodyClick);
			}
		};
	}, [popperRef, isOpen, setOpen]);

	const handleOnChange = color => {
		setNewColors(color.hex);
	};

	return (
		<Manager>
			<Reference>
				{({ ref }) => (
					<View
						type="button"
						ref={ref}
						onClick={() => setOpen(true)}
						style={{ cursor: 'pointer' }}
					>
						<Swatch label="Main" color={mainColor} />
					</View>
				)}
			</Reference>
			{isOpen && (
				<Popper placement="right-start">
					{({ ref, style, placement }) => (
						<View ref={popperRef}>
							<View
								ref={ref}
								style={{ ...style, zIndex: 8 }}
								data-placement={placement}
							>
								<ColorPicker
									disableAlpha={true}
									color={mainColor}
									onChangeComplete={handleOnChange}
								/>
							</View>
						</View>
					)}
				</Popper>
			)}
		</Manager>
	);
}

function Swatches({
	mainColor,
	accentColor,
	textColor,
	uiColor,
	setNewColors,
}) {
	return (
		<>
			<Box mb={2}>
				<MainColorSwatch
					mainColor={mainColor}
					setNewColors={setNewColors}
				/>
			</Box>
			<Box mb={2}>
				<Swatch label="Accent" color={accentColor} />
			</Box>
			<Box mb={2}>
				<Swatch label="Text" color={textColor} />
			</Box>
			<Box mb={2}>
				<Swatch label="UI" color={uiColor} />
			</Box>
		</>
	);
}

export default function SampleColors(props) {
	return (
		<>
			<Viewport.Desktop>
				<DesktopContainer>
					<Label isMuted>Colors</Label>
					<Swatches {...props} />
				</DesktopContainer>
			</Viewport.Desktop>
			<Viewport.Mobile>
				<Spacer size="xxl">
					<Label isMuted>Colors</Label>
					<Section>
						<Flexy>
							<Swatches {...props} />
						</Flexy>
					</Section>
				</Spacer>
			</Viewport.Mobile>
		</>
	);
}

const DesktopContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 70px;
	left: 20px;
	z-index: 9;
`;
