var div = document.querySelector('.map');
var xhr = new XMLHttpRequest();
var arr;

function Distanse (lat1, lng1, lat2, lng2){
    var ri =+ Math.PI/180;
    var lat1 = lat1 * ri, lng1 = lng1 * ri, lat2 = lat2 * ri, lng2 = lng2 * ri;
    var r = 6372.797;
    var c1 = Math.cos(lat1), c2 = Math.cos(lat2), s1 = Math.sin(lat1), s2 = Math.sin(lat2);
    
    var delta = lng2 - lng1, cdelta = Math.cos(delta), sdelta = Math.sin(delta);
    var y = Math.sqrt(Math.pow(c2 * sdelta, 2) + Math.pow(c1 * s2 - s1 * c2 * cdelta, 2));
    var x = s1 * s2 + c1 * c2 * cdelta;
    var ad = Math.atan2(y, x);

    var dist = parseInt(ad * r);
    return dist;
}

xhr.open("GET", "map.json" , true); 
xhr.onload = function(){
	arr = JSON.parse(xhr.responseText);
	var marker = [], coordsArray =[], distanse = 0;
	var coords = new google.maps.LatLng(arr[0].x, arr[0].y);
	var setting = {
		zoom: 8,
		center: coords,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(div, setting);
	for(var i = 0; i< arr.length; i++){
		var coords = new google.maps.LatLng(arr[i].x, arr[i].y);
		coordsArray.push(coords);
		marker[i] = new google.maps.Marker({
			position: coords,
			map: map,
			title: arr[i].name
		});

		if(i < arr.length-1){
			distanse += Distanse(arr[i].x, arr[i].y, arr[i+1].x, arr[i+1].y);
		}	
	}
	var line = new google.maps.Polyline({
    path: coordsArray,
    geodesic: true,
    strokeColor: '#ff0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  line.setMap(map);
  console.log("длинна: " + distanse + "км");
};
xhr.send();