"use client";

import { useState, useEffect } from "react";
import { geolocationState } from "../_interfaces/geolocationStateInterface";

/**
 * Geolocation APIを使用した位置情報を取得するHooks
 * @returns 取得した緯度、経度を返す。取得できなかった場合、エラーを返す。
 */
export const useLocation = () => {
  //locationには緯度、経度、エラーを設定
  const [location, setLocation] = useState<geolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    // geolocationがサポートされていない場合、
    // エラーを返す
    if (!navigator.geolocation) {
      setLocation({
        latitude: null,
        longitude: null,
        error: "GeolocationAPIがサポートされていないブラウザです。",
      });
      return;
    }

    // 正しく取得できた場合、
    // latitudeとlongitudeにそれぞれ格納
    const onSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    // 取得に失敗した場合、
    // errorにエラーメッセージを格納
    const onError = (error: GeolocationPositionError) => {
      setLocation({
        latitude: null,
        longitude: null,
        error: error.message,
      });
    };

    const geoWatcher = navigator.geolocation.watchPosition(onSuccess, onError);

    return () => navigator.geolocation.clearWatch(geoWatcher);
  }, []);

  return location;
};
