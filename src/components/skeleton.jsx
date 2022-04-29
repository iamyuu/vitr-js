/**
 * @param {object} props
 * @param {string} props.className
 */
export function Skeleton(props) {
	return <div className={['animate-pulse rounded-sm bg-slate-300', props.className].join(' ')} />;
}
