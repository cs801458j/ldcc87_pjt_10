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
		init : function() {
			$('#topnav').load('../../common/html/topnav.html', function(){
				$('.sidenav').sidenav();
			})
			
			page.initLayout();
			
			
		},
		initInterface : function() {
			$('.card-panel').click(function() {
				var docId = $(this).attr('docid');
				LEMP.Window.open({
					"_sPagePath" : "DTL/html/DTL0001.html",
					"_oMessage" : {
						"docid" : docId
						
					}
				})
				alert(docId);
				
			});
		},
		initLayout : function() {
			LEMP.Network.requestTr({
			    "_sTrcode" : "DM0002",
			    "_oBody" : {
			        "startIndex" : 0,
			        "endIndex" : 9
			    },
			    "_fCallback" : function(resDM0002){
			        var result = resDM0002.header.result
			        if(result) {
			        	var arrList = resDM0002.body.list
			        	render(arrList);
			        	page.initInterface();
			        	
			        }
			    }
			});
			
		}
}

function render(coll) {
	coll.forEach(function(v,i){
		$('#card-container').append($('<div/>' , {
			class : 'col s12 m5',
			id : 'card'+i 
		}) );
		$('#card' +i ).append($('<div/>', {
			class : 'card-panel teal',
			id : 'cardpanel' + i,
			docid : v.docId 
		}));
		$('#cardpanel' + i).append($('<span/>',{
			class : 'white-text',
			text : v.title
		}))
	})
}