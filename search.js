import { ps, build_static_map } from './kakaomap.js';

window.onload = function() {
    var win_width = window.innerWidth;
    var win_height = window.innerHeight;

    console.log(win_width, win_height)
    const mapContainer = document.getElementById('map');
    const send_map_container = document.getElementById('send_map_container');

    mapContainer.style.width = win_width + "px";
    mapContainer.style.height = win_height + "px";
    send_map_container.style.width = win_width + "px";
};


function send_map() {
    var map_json = build_static_map();
    var url = "https://map.kakao.com/?mapJson=" + encodeURIComponent(JSON.stringify(map_json));
    console.log(url);
}

window.send_map = send_map;