// copied over from kakaoapi dev website

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.44233882835437, 126.57143639486833), //지도의 중심좌표.
    level: 2 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
map.setZoomable(false); // remove zooming when scrolling in element

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: map.getCenter()
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);