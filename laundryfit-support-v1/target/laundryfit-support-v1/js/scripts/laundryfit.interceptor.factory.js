/**
 * 
 */
app.factory('LaundryfitAuthInterceptor', function ($window, $q, $location) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if($location.path() === '/home') {
                $window.sessionStorage.clear();
            	config.headers.Authorization = 'loginCredential';
            } else {
		        if ($window.sessionStorage.getItem('access_token')) {
		           config.headers.Authorization = 'Bearer ' + $window.sessionStorage.getItem('access_token');
		        } 
            }
            return config || $q.when(config);
        },
        response: function(response) {
        	if(response.status === 401 || response.status === 403) {
        		$location.url('home');
            }
            return response || $q.when(response);
        }
    };
});

// Register the previously created AuthInterceptor.
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('LaundryfitAuthInterceptor');
});