import styled from '@emotion/styled';

const isMuted = ({ isMuted }) => isMuted && `opacity: 0.5;`;
const size = ({ size = 'md' }) => {
	const sizes = {
		md: '12px',
		sm: '11px',
		xs: '10px',
	};

	return `font-size: ${sizes[size]}`;
};

const Label = styled.div`
	${isMuted};
	${size};
	font-weight: bold;
	font-family: var(--fontFamilyCode);
	margin-bottom: 8px;
	text-transform: uppercase;
`;

export default Label;
