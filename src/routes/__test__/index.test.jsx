import { render, screen } from '@testing-library/react';
import IndexPage from '../index';

test('should render', () => {
	render(<IndexPage />);

	expect(screen.getByRole('article')).toBeInTheDocument();

	expect(screen.getByRole('heading')).toBeInTheDocument();
	expect(screen.getByRole('heading').textContent).toMatchInlineSnapshot('"Lorem, ipsum dolor."');

	expect(screen.getByLabelText('content')).toBeInTheDocument();
});
