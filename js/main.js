require({
	paths:{
		jquery: 'jquery',
		jqm: 'jquery.mobile-1.1.1'
	},
	shim:{
		jqm:['jquery']
	}
},['jquery','jqm'],function(jquery,jqm){	
	console.log('main loaded');
	$('#page1').live('pageinit',function(){
		$(this).text('page1 enhanced.');
	});
});