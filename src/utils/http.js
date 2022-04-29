import { API_URL } from '~/config';

export class HttpError extends Error {
	/**
	 * @param {number} status
	 * @param {string} message
	 * @param {any} [info]
	 */
	constructor(status, message, info) {
		super(message);
		this.name = 'HttpError';
		this.info = info ?? {};
		this.status = status || 500;
	}
}

/**
 * @typedef {RequestInit & object} HttpRequestConfig
 * @property {Record<string, any>} [data] - post data
 * @property {string} [baseURL] - base url
 */

/**
 * Http request
 *
 * @param {string} endpoint
 * @param {HttpRequestConfig} config
 */
export async function http(endpoint, { baseURL, data, headers: customHeaders, ...customConfig } = {}) {
	const { signal, abort } = new AbortController();
	const input = [baseURL ?? API_URL, endpoint].join('');
	const config = {
		signal,
		method: data ? 'POST' : 'GET',
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			'Content-Type': 'application/json',
			...customHeaders,
		},
		...customConfig,
	};

	const fetcher = fetch(input, config).then(async response => {
		const responseData = await response.json();
		return response.ok ? responseData.DATA : Promise.reject(new Error(responseData.MESSAGE));
	});

	return Object.assign(fetcher, { cancel: abort });
}
