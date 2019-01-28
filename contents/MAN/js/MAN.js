var page = {
	//	가장 먼저 실행하게 되는 default 함수	
	init:function()
	{	
		$('#topnav').load('../../common/html/topnav.html', function(){
			$('.sidenav').sidenav();
		})
		//page.initInterface();
	},
	
	initInterface : function()
	{
		$("#Test1").click(function(){
			// Write Test Source 
		});
	}
};