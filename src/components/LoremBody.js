import React from 'react';
import styled from '@emotion/styled';

export default function LoremBody() {
	return (
		<Body>
			Phasellus aliquet orci a mi mattis consectetur. Quisque convallis mi
			tortor, sit amet tempor tellus fringilla sit amet. Phasellus
			suscipit ex ex, a accumsan libero egestas nec. Phasellus enim nulla,
			hendrerit et dapibus nec, mattis a dolor. Donec semper ante nec
			purus dapibus, eu maximus nisi venenatis. Nulla eget eros sed neque
			dictum pharetra. Donec scelerisque dignissim aliquet. Ut sit amet
			condimentum felis, at lacinia risus. Vivamus pellentesque interdum
			sem. Suspendisse rhoncus mi ex, et eleifend ante rhoncus vel.
		</Body>
	);
}

const Body = styled.p`
	font-family: var(--bodyFont);
	font-size: 1rem;
	margin: 0;
	line-height: 1.5;
`;
