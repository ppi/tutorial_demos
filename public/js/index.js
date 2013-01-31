var map = null,
    latitude = null,
    longitude = null,
    infoWindow = null;
 
function useDefaultLocation() {
    latitude = 31.8391;
    longitude = -106.5631;
}
 
function initialize() {
    
    var myOptions = {
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false
    };
 
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    latlng = new google.maps.LatLng(latitude, longitude);
    map.setCenter(latlng);
    map.setZoom(10);
}
 
jQuery(document).ready(function ($) {
 
    // check if the geolocation object is supported, if so get position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            geo = true;
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            initialize();
        }, function (e) {
            useDefaultLocation();
            initialize();
        });
    }
 
});
