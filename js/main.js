var core = (function () {

	var fetchSuccess = function () {
		console.log('fetch args', arguments);
	};

	return {
		init: function () {
			IN.API.Profile('37178410').result(fetchSuccess);
		}
	};
})();