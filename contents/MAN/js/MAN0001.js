//var page = {

////init:function()이 메인함수라고 볼 수 도 있다.
//init:function()
//{
//page.initInterface();
//},

//initInterface : function()
//{
//$("#Test1").click(function(){
//// Write Test Source 
//});
//}
//};

var currentCard=0;

var page = {
		init : function() {
			$('#topnav').load('../../common/html/topnav.html', function(){
				$('.sidenav').sidenav();
			})
			page.initInterface();


		},

		initInterface : function() {
			$('#card-slide').click(function() {
				currentCard++;
				
				if(currentCard==3){
					currentCard=1;
				}
				
				timetext = "images/card" + currentCard+ ".jpg";  
				alert(timetext);
				document.getElementById( "card-slide" ).setAttribute("src",timetext);  

						

			});
		},

}


