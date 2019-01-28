/**
 * 
 */
var autologin = false;

var page= {
		init : function() {

			
			autoLoginCheck();
			$('.sidenav').sidenav();
			page.initInterface();

		},
		initInterface : function() {
			

			$('#switch-input').click(function() {
				autologin = $('#switch-input').is(':checked')
			});

			$('#login-btn').click(function(){
				var id = $('#userid').val();
				var pw = $('#userpw').val();
				validationCheck(id,pw) ? 
						login(id,pw,auto)
						: 	swalFire('login error!','id 또는 pw를 확인해주세요','error','ok')

			});
		}
}


function validationCheck(id,pw) {
	if(id =='') return false
	if(pw =='') return false
	return true
}


function swalFire(title,text,type,confirm) {
	Swal.fire({
		title: title,
		text: text,
		type: type,
		confirmButtonText: confirm
	})
}

function loginProcess(id,pw,autologin) {
	LEMP.Properties.setList({
		"_aList" : [{ "_sKey" : "id", "_vValue" : id} , 
		            { "_sKey" : "pw", "_vValue" : pw },
		            { "_sKey" : "autologin", "_vValue" : autologin }

		            ]
	});

	LEMP.Window.open({
		"_sPagePath" : "MAN/html/MAN0001.html"
	})

}

function autoLoginCheck() {
	var aLogin =  LEMP.Properties.get({
		"_sKey" : "autologin"
	});

	if(aLogin) {
		var id = LEMP.Properties.get({
			"_sKey" : "id"
		});

		var pw = LEMP.Properties.get({
			"_sKey" : "pw"
		});
		login(id,pw,aLogin)

	}

}

function login(id,pw,autologin) {
	LEMP.Network.requestLogin({
		"_sUserId" : id,
		"_sPassword" : pw,
		"_sTrcode" : "DM0001",
		"_oBody" : {
			"userId": id,
			"password": pw
		},
		"_fCallback" : function(resDM0001)  {
			var result = resDM0001.header.result;

			result ? 
					loginProcess(id,pw,autologin)

					: 
						swalFire('login error!','id 또는 pw를 확인해주세요','error','ok')

		}
	})

}