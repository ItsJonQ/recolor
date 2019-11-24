import styled from '@emotion/styled';

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

	${isPrimary};

	& + & {
		margin-left: -2px;
	}
`;

export default Button;
