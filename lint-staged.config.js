/**
 * @type {Record<string, string>}
 */
module.exports = {
	'*.{js,jsx}': 'eslint --fix --cache --max-warnings 0',
	'*.{js,jsx,css}': 'prettier --write',
};
