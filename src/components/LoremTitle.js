import React from 'react';
import styled from '@emotion/styled';

export default function Lorem(props) {
	return (
		<Title {...props}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Title>
	);
}

const Title = styled.h1`
	padding: 0;
	font-size: 2.2rem;
	line-height: 1.15;
	margin: 0;
`;
