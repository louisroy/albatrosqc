var App = (function()  {
	var onAppReady = function(ev) {
		console.log('App ready.');
	};
	
	var onAppLoaded = function(ev) {
		console.log('App loaded.');
	};
	
	var construct = (function(ev) {
		$(document).ready(onAppReady);
		$(window).ready(onAppLoaded);
	})(); 
})();
