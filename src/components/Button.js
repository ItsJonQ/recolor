import styled from '@emotion/styled';

const toPx = value => (typeof value === 'number' ? `${value}px` : value);

const width = ({ width = 'auto' }) => `width: ${toPx(width)};`;
const size = ({ size = 'md' }) => {
	const sizes = {
		lg: '12px 20px',
		md: '8px 12px',
		sm: '4px 8px',
	};

	return `padding: ${sizes[size]};`;
};

const isPrimary = ({ isPrimary }) => {
	if (!isPrimary) return '';
	return `
        background-color: var(--accentColor);
        color: var(--uiColor);
    `;
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
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	&:focus {
		outline: 2px dotted;
		z-index: 1;
	}

	${size};
	${width};
	${isPrimary};

	& + & {
		margin-left: -2px;
	}
`;

export default Button;
