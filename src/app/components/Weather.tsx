"use client";

import axios from "axios";
import { useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";

type Coordinates = {
  lat: number;
  long: number;
};

export function Weather() {
  "use client";


  function getWeatherData(lat: number, long: number) {
    const res = axios.get(`/api/weather?lat=${lat}&long=${long}`);
    console.log(res);
  }

  useEffect(() => {
    function success(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords;
      getWeatherData(latitude, longitude);
    }

    function error() {
      console.log('Unable to retrieve your location');
    }

    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation is not supported by this browser');
    }

  }, []);

  return (
    <button className="flex items-center gap-1 mt-5 px-8">
      <WiDaySunny className="w-9 h-9 text-white"/>
      <span className="text-xl font-semibold text-white">
        31°c
      </span>
    </button>
  )
}