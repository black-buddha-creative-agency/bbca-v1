const useApiUrl = (location) => {
	let API_URL;

	if (location && location.hostname.indexOf("localhost") > -1) {
		API_URL = "http://localhost:1337";
	} else if (location && location.hostname.indexOf("dev") > -1) {
		API_URL = "http://dev-api.blackbuddha.agency";
	} else if (location && location.hostname.indexOf("staging") > -1) {
		API_URL = "http://staging-api.blackbuddha.agency";
	} else {
		API_URL = "http://api.blackbuddha.agency";
	}

	return { API_URL };
};

export default useApiUrl;
