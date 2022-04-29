import { Link } from 'react-router-dom';

const defaultMessage = 'Internal server error';

/**
 * Global error fallback
 *
 * @param {object} props
 * @param {Error} props.error
 */
export function ErrorFallback(props) {
	return (
		<div className='my-12 flex flex-col space-y-4 justify-center items-center' role='alert'>
			<h1 className='text-lg font-semibold'>{props.error.message ?? defaultMessage}</h1>
			<Link className='py-1 px-4 border border-slate-300 rounded-md transition-opacity hover:opacity-75' to='/'>
				Back to home
			</Link>
		</div>
	);
}

/**
 * Root error fallback
 *
 * @param {object} props
 * @param {Error} props.error
 */
export function RootErrorFallback(props) {
	return (
		<div className='my-12 flex flex-col space-y-4 justify-center items-center' role='alert'>
			<h1 className='text-lg text-red-500'>{props.error.message ?? defaultMessage}</h1>
		</div>
	);
}
