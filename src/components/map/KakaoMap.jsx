import React, { useEffect, useState } from "react";
import * as style from "../../pages/detail/style/DetailPage.Location.js";

const DetailLocation = ({ address }) => {
  const KAKAO_REST_KEY = import.meta.env.VITE_REST_KEY;
  const KAKAO_JS_KEY = import.meta.env.VITE_JS_KEY;
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);


  useEffect(() => {
    if (!address) return;
    getCoordinates(address);
  }, [address]);

  const getCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
          address
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
          },
        }
      );

      const data = await response.json();
      const { x, y } = data.documents[0];
      console.log(x, y);
      setCoords({ latitude: y, longitude: x });
    } catch (e) {
      console.log("API 요청 실패", e);
    }
  };

  useEffect(() => {
    if (!coords.latitude || !coords.longitude) return;

    if (window.kakao && window.kakao.maps) {
      initializeMap(coords.latitude, coords.longitude);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(initializeMap);
    };

    return () => document.head.removeChild(script);
  }, [coords.latitude, coords.longitude]);


  useEffect(() => {
    if (isScriptLoaded && coords.latitude && coords.longitude) {
      initializeMap(coords.latitude, coords.longitude);
    }

  }, [isScriptLoaded, coords.latitude, coords.longitude]);

  const initializeMap = () => {

    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;
    const mapOptions = {
      center: new window.kakao.maps.LatLng(coords.latitude, coords.longitude),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOptions);
    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(coords.latitude, coords.longitude),
    });

    marker.setMap(map);
  };

  return <style.KakaoMapContainer id="map" />;
};

export default DetailLocation;
