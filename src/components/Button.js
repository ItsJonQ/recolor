import { css } from '@emotion/core';
import styled from '@emotion/styled';

const toPx = value => (typeof value === 'number' ? `${value}px` : value);

const width = ({ width = 'auto' }) => `width: ${toPx(width)};`;
const size = ({ size = 'md' }) => {
	const sizes = {
		lg: '12px 20px',
		md: '8px 12px',
		sm: '4px 8px',
	};

	return css`
		padding: ${sizes[size]};
	`;
};

const variant = ({ variant = 'default' }) => {
	switch (variant) {
		case 'primary':
			return css`
				background-color: var(--accentColor);
				color: var(--uiColor);
			`;
		case 'secondary':
			return css`
				border-color: transparent;
				text-decoration: underline;

				&:hover,
				&:active,
				&:focus {
					border-color: var(--textColor);
				}
			`;
		default:
			return '';
	}
};

const Button = styled.button`
	background-color: transparent;
	border: 2px solid var(--accentColor);
	border-radius: 0px;
	color: var(--textColor);
	cursor: pointer;
	display: inline-block;
	font-family: var(--fontFamilyCode);
	font-size: 12px;
	font-weight: bold;
	line-height: 1;
	padding: 8px 12px;
	position: relative;
	text-align: center;
	text-transform: uppercase;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	&:focus {
		outline: 2px dotted var(--accentColor);
		z-index: 1;
	}

	${size};
	${width};
	${variant};

	& + & {
		margin-left: -2px;
	}
`;

export default Button;
