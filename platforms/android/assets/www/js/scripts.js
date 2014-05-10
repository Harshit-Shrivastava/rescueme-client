var user_list = [];

function getUsers() {
	$.getJSON("http://saurabhsood91.byethost16.com/getusers.php").done(function(data){
		alert(data);
	});
}