import styled from '@emotion/styled';
import View from './View';

const Layout = styled(View)`
	max-width: 920px;
	padding: 20px 20px 100px;
	margin: 50px auto;

	@media (min-width: 768px) {
		padding-left: 120px;
	}

	@media (min-width: 1120px) {
		padding-left: 20px;
	}
`;

export default Layout;
