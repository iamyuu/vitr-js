/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: ['kentcdodds', 'kentcdodds/react', 'kentcdodds/jsx-a11y', 'kentcdodds/jest', 'plugin:jsdoc/recommended'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
	},
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.js', '.jsx'],
				map: [['~', './src']],
			},
		},
		jsdoc: {
			mode: 'typescript',
			preferredTypes: ['RequestInit'],
		},
		jest: {
			version: 27,
		},
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		'import/prefer-default-export': 'off',
		'jsdoc/require-property-description': 'off',
		'jsdoc/require-param-description': 'off',
		'jsdoc/require-returns': 'off',
		'no-console': 'warn',
		'no-restricted-imports': ['error', { patterns: ['~/features/*/*'] }],
		'no-warning-comments': 'off',
		radix: ['error', 'as-needed'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/jsx-sort-props': ['warn', { reservedFirst: ['key'] }],
	},
};
