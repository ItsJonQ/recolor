import styled from '@emotion/styled';
import View from './View';

const gap = ({ gap = 'md' }) => {
	const gaps = {
		xl: '20px',
		lg: '16px',
		md: '12px',
		sm: '8px',
		xs: '4px',
		none: '0',
	};
	const value = gaps[gap];

	return `
        & > * {
            margin-right: ${value};
            &:last-child {
                margin-right: 0;
            }
        }
    `;
};

const Flexy = styled(View)`
	align-items: center;
	display: flex;
	justify-content: space-between;

	${gap};
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
