//var page = {
//	
//		//init:function()이 메인함수라고 볼 수 도 있다.
//	init:function()
//	{
//		page.initInterface();
//	},
//	
//	initInterface : function()
//	{
//		$("#Test1").click(function(){
//			// Write Test Source 
//		});
//	}
//};


var page = {
		init : function(args) {
			$('#topnav').load('../../common/html/topnav.html', function(){
				$('.sidenav').sidenav();
			})
			
			
			var docid = args.data.docid
			console.log(docid)
		page.initLayout(docid);
		},
		initLayout : function(docid) {
			LEMP.Network.requestTr({
			    "_sTrcode" : "DM0003",
			    "_oBody" : {
			        "docId" : Number(docid)
			    },
			    "_fCallback" : function(resDM0003){
			        var body = resDM0003.body;
			        var title = body.title;
			        var contents = body.contents;
			        var date = body.regDate;
			        
			        $('#title').text(title);
			        $('#contents').text(contents);
			        $('#regdate').text(date);
			    }
			});

			
		}
}