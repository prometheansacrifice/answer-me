require.config({
	'paths': {
		'jquery': 'lib/jquery',
		'bootstrap': 'lib/bootstrap',
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
		}
	}
});

require([
    'jquery', 'bootstrap'
], function(jquery,bootstrap) {
    console.log('viewdb.php js dependencies loaded');
})