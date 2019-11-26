import React from 'react';
import { Waypoint } from 'react-waypoint';
import styled from '@emotion/styled';
import { noop } from 'lodash';
import Flexy from './Flexy';

export default function Page({
	children = null,
	onEnter = noop,
	onLeave = noop,
	...restProps
}) {
	return (
		<PageLayout minHeight="100vh" {...restProps}>
			<Flexy.Item>
				<Waypoint onEnter={onEnter} onLeave={onLeave}>
					<div>{children}</div>
				</Waypoint>
			</Flexy.Item>
		</PageLayout>
	);
}

const PageLayout = styled(Flexy)`
	padding: 40px 20px 100px;
`;
