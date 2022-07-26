import axios from "axios";


const axiosClient = axios.create({
   baseURL: 'https://js-post-api.herokuapp.com/api',
	headers: {
		'content-type': 'application/json',
	},
});

// Handle checking permission before request data
axiosClient.interceptors.request.use(async (config) => {
	// Handle token here ...
	return config;
})

// Handle response data after request success
axiosClient.interceptors.response.use((response) => {
	if (response && response.data) {
		return response.data;
	}
	return response;
}, (error) => {
	// Handle errors
	throw error;
});

export default axiosClient;
