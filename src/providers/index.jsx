import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootErrorFallback, FullPageSpinner } from '~/components/ui';

/**
 * @param {object} props
 * @param {import('react').ReactNode}  props.children
 */
export default function AppProviders({ children }) {
	return (
		<ErrorBoundary FallbackComponent={RootErrorFallback}>
			<Suspense fallback={<FullPageSpinner />}>
				<Router>{children}</Router>
			</Suspense>
		</ErrorBoundary>
	);
}
