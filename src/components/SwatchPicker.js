import React, { useState, useRef, useEffect } from 'react';
import { noop } from 'lodash';
import { Manager, Reference, Popper } from 'react-popper';

import ColorPicker from './ColorPicker';
import Swatch from './Swatch';
import View from './View';

export default function SwatchPicker({
	color,
	placement = 'right-start',
	setNewColors = noop,
	...restProps
}) {
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
						<Swatch color={color} {...restProps} />
					</View>
				)}
			</Reference>
			{isOpen && (
				<Popper placement={placement}>
					{({ ref, style, placement }) => (
						<View ref={popperRef}>
							<View
								ref={ref}
								style={style}
								data-placement={placement}
							>
								<ColorPicker
									color={color}
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
