import styled from '@emotion/styled';
import { css } from '@emotion/core';
import View from './View';

const gap = ({ gap = 'md' }) => {
	const gaps = {
		xxl: '32px',
		xl: '20px',
		lg: '16px',
		md: '12px',
		sm: '8px',
		xs: '4px',
		none: '0',
	};
	const value = gaps[gap];

	return css`
		& > * {
			margin-right: ${value};
			&:last-child {
				margin-right: 0;
			}
		}
	`;
};

const align = ({ align = 'center' }) => {
	const aligns = {
		top: 'flex-start',
		center: 'center',
		middle: 'center',
		bottom: 'flex-end',
	};
	const value = aligns[align];

	return css`
		align-items: ${value};
	`;
};

const justify = ({ justify = 'snap' }) => {
	const justifies = {
		left: 'flex-start',
		center: 'center',
		middle: 'center',
		right: 'flex-end',
		snap: 'space-between',
	};
	const value = justifies[justify];

	return css`
		justify-content: ${value};
	`;
};

const Flexy = styled(View)`
	display: flex;
	${align};
	${gap};
	${justify};
`;

const Item = styled(View)`
	min-width: 0;
	max-width: 100%;
`;

const Block = styled(View)`
	flex: 1;
	min-width: 0;
	max-width: 100%;
`;

Flexy.Item = Item;
Flexy.Block = Block;

export default Flexy;
