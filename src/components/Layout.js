import styled from '@emotion/styled';
import View from './View';

const Layout = styled(View)`
	max-width: 920px;
	padding: 0;
	margin: 0 auto;

	@media (min-width: 768px) {
		margin-top: 72px;
		padding-left: 120px;
	}

	@media (min-width: 1120px) {
		margin-top: 0;
		padding-left: 20px;
	}
`;

export default Layout;
