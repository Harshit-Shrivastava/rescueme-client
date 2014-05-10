var user_list = [];
var users_in_close_vicinity = [];
if (typeof(Number.prototype.toRadians) === "undefined") {
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
}

function getUsers() {
	$.getJSON("http://saurabhsood91.byethost16.com/getusers.php").done(function(data){
		alert(data);
	});
}


function distanceBetweenCoordinates(lat1, lng1, lat2, lng2) {
	var R = 6371;
	var si1 = lat1.toRadians();
	var si2 = lat2.toRadians();
	var deltaSi = (lat2-lat1).toRadians();
	var deltaLambda = (lng2 - lng1).toRadians();

	var a = Math.sin(deltaSi / 2) * Math.sin(deltaSi / 2) + Math.cos(si1) * Math.cos(si2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d;
}

function isWithinRange(lat1, lng1, lat2, lng2) {
	if(distanceBetweenCoordinates(lat1, lng1, lat2, lng2) <= 1) {
		return true;
	} else {
		return false;
	}
}

function findUsersInCloseVicinity() {
	var i = 0;
	for(i = 0; i < user_list.length; i++) {
		if(isWithinRange(lat, lng, user_list[i].lat, user_list[i].long)) {
			users_in_close_vicinity.push(user_list[i]);
		}
	}
}