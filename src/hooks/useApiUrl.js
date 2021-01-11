const useApiUrl = (location) => {
	let API_URL;

	if (location && location.hostname.indexOf("localhost") > -1) {
		API_URL = "http://localhost:1337";
	} else if (location && location.hostname.indexOf("dev") > -1) {
		API_URL = "https://dev-api.blackbuddha.agency";
	} else if (location && location.hostname.indexOf("staging") > -1) {
		API_URL = "https://staging-api.blackbuddha.agency";
	} else {
		API_URL = "https://api.blackbuddha.agency";
	}

	return { API_URL };
};

export default useApiUrl;
