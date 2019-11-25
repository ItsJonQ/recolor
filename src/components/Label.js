import styled from '@emotion/styled';
import { css } from '@emotion/core';
import View from './View';

const isMuted = ({ isMuted }) => {
	if (!isMuted) return '';

	return css`
		opacity: 0.5;
	`;
};

const size = ({ size = 'md' }) => {
	const sizes = {
		md: '12px',
		sm: '11px',
		xs: '10px',
	};

	return css`
		font-size: ${sizes[size]};
	`;
};

const Label = styled(View)`
	${isMuted};
	${size};
	font-weight: bold;
	font-family: var(--fontFamilyCode);
	text-transform: uppercase;
`;
Label.defaultProps = {
	mb: 2,
};

export default Label;
