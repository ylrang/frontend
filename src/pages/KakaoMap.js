import React, { useEffect, useRef } from "react";

const { kakao } = window;

const KakaoMap = () => {
  const container = useRef(null);
    
  const showMap = () => {
    const options = {
        center: new kakao.maps.LatLng(36.3748543, 127.3680669),
        level: 3,
    };
    const map = new kakao.maps.Map(container.current, options);
    map.setDraggable(false);
    map.setZoomable(false);
    const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(36.3748543, 127.3680669),
    });
    const infoWindow = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(36.3748543, 127.3680669),
        content: '<div style="padding:5px;font-size:13px;color:black;">한국원자력안전기술원<br><a href="https://map.kakao.com/link/map/한국원자력안전기술원,36.3748543, 127.3680669" style="color:blue;font-size:11px" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/한국원자력안전기술원,36.3748543, 127.3680669" style="color:blue;font-size:11px" target="_blank">길찾기</a></div>',
    });
    infoWindow.open(map, marker)
  }

    useEffect(() => {
        var tabEl = document.querySelector('#pills-tab');
        tabEl.addEventListener('shown.bs.tab', function (e) {
            if (e.target.id === 'location-tab') {
                showMap();
            }
        })
    }, []);
  return (
    <div id="map" ref={container} style={{ width: '100%', height: '400px', textAlign: 'center' }}></div>
  );
};

export default KakaoMap;