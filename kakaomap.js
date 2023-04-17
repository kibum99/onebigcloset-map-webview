var geocoder = new kakao.maps.services.Geocoder();
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};
var map = new kakao.maps.Map(mapContainer, mapOption); 
var ps = new kakao.maps.services.Places(); // 장소 검색 객체를 생성합니다
var marker = new kakao.maps.Marker({ 
    position: map.getCenter(),
    image: new kakao.maps.MarkerImage(
        'static/marker.png',
        new kakao.maps.Size(40, 60),
        {offset: new kakao.maps.Point(20, 60)})
});

function build_static_map(){
    var staticMapContainer  = document.getElementById('static_map'), // 이미지 지도를 표시할 div 
    staticMapOption = { 
        center: marker.getPosition(), // 이미지 지도의 중심좌표
        level: 3, // 이미지 지도의 확대 레벨
        marker: {
            position: marker.getPosition()
        } // 이미지 지도에 표시할 마커 
    };    
    new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
    var mapjson = decodeURIComponent(staticMapContainer.children[0].search).replace("?mapJson=", "");
    staticMapContainer.innerHTML = "";
    staticMapContainer.style.display = "none";
    return JSON.parse(mapjson);
}

function marker_setPosition(marker, latlng){
    marker.setPosition(latlng);
}

marker.setMap(map);

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    var latlng = mouseEvent.latLng;
    marker_setPosition(marker, latlng);
});

export { ps, build_static_map };