/**
 * External dependencies
 */
import { useContext, useCallback, useEffect } from 'react';
import { __RouterContext as RouterContext } from 'react-router-dom';

export function useRouter() {
	return useContext(RouterContext);
}

export function useRouteChange(callback) {
	const { location } = useRouter();
	const { pathname } = location;

	const handleOnRouteChange = useCallback(() => {
		if (callback) {
			callback(pathname);
		}
	}, [callback, pathname]);

	useEffect(() => {
		handleOnRouteChange();
	}, [handleOnRouteChange, pathname]);
}
