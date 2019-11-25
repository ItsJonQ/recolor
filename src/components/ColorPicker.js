import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colorize from 'tinycolor2';

import { SketchPicker } from 'react-color';

export default function ColorPicker(props) {
	const isLight = colorize(props.color).isLight();

	return (
		<ColorPickerWrapper isLight={isLight}>
			<SketchPicker disableAlpha={true} {...props} />
		</ColorPickerWrapper>
	);
}

const isLight = ({ isLight }) => {
	if (isLight) {
		return css`
			--borderColor: rgba(0, 0, 0, 0.3);
		`;
	} else {
		return css`
			--borderColor: rgba(255, 255, 255, 0.3);
		`;
	}
};

const ColorPickerWrapper = styled.div`
	${isLight};
	.sketch-picker {
		background: var(--uiColor) !important;
		border: 2px solid var(--borderColor) !important;
		border-radius: 0;
		color: var(--textColor) !important;
		font-family: var(--fontFamilyCode);
		user-select: none;

		* {
			color: var(--textColor) !important;
			user-select: none;
		}

		input {
			background: var(--uiColor) !important;
			border: 2px solid var(--borderColor) !important;
			box-shadow: none !important;
			user-select: initial;
		}

		.flexbox-fix {
			&:last-child {
				border-top: 2px solid var(--borderColor) !important;
			}
		}
	}
`;
