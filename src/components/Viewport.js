/**
 * External dependencies
 */
import React, { useState, useCallback, useEffect } from 'react';

const DESKTOP_MQ_SIZE = 768;

function MinWidth(props) {
	const { children, width } = props;

	const [visible, setVisible] = useState(shouldViewportShow(width));

	const calculateVisibility = useCallback(() => {
		setVisible(shouldViewportShow(width));
	}, [width]);

	useEffect(() => {
		window.addEventListener('resize', calculateVisibility);
		return () => {
			window.removeEventListener('resize', calculateVisibility);
		};
	}, [calculateVisibility]);

	if (!visible) {
		return null;
	}

	return children;
}

MinWidth.defaultProps = {
	width: DESKTOP_MQ_SIZE,
};

function Desktop(props) {
	return <MinWidth {...props} width={DESKTOP_MQ_SIZE} />;
}

function Mobile(props) {
	const [visible, setVisible] = useState(!showDesktop());
	const { children } = props;

	const calculateVisibility = useCallback(() => {
		setVisible(!showDesktop());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', calculateVisibility);
		return () => {
			window.removeEventListener('resize', calculateVisibility);
		};
	}, [calculateVisibility]);

	if (!visible) {
		return null;
	}

	return children;
}

function shouldViewportShow(width = DESKTOP_MQ_SIZE) {
	return window.innerWidth >= width;
}

function showDesktop() {
	return shouldViewportShow(DESKTOP_MQ_SIZE);
}

const Viewport = {
	Desktop,
	Mobile,
	MinWidth,
};

export default Viewport;
