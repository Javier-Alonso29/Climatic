"use client";
import Card from "@/components/cards/Card";
import Logo from "@/components/logo";
import axios from "axios";
import { monterrey } from "@/types/cities";
import { useEffect, useState } from "react";

interface WeatherData {
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

const getWeather = async () => {
  // 📄: https://openweathermap.org/current
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "44b81114cf9fdb8f0d8bed2f3e7e6f30";

  // ... Here goes the magic to get the weather
  const response = await axios(API_URL, {
    params:{
      appid: API_KEY,
      lat: monterrey.lat,
      lon: monterrey.lng,
    }
  });

  const data: WeatherData = response.data;
  return data;
};

export default function Home() {

  const [weather, setWeather] = useState({
    description: "",
    temp: 0,
    temp_min: 0,
    temp_max: 0,
  })

  useEffect(() => {
    getWeather().then(response => {      
      setWeather({
        description: response.weather[0].description,
        temp: response.main.temp,
        temp_min: response.main.temp_min,
        temp_max: response.main.temp_max,
      })
    });    
  }, []);

  return (
    <div className="container">
      <div className="col-md-12">
        <div>
          <Logo />
          <Card description={weather.description} temp={weather.temp} temp_max={weather.temp_max} temp_min={weather.temp_min} />
        </div>
      </div>
    </div>
  );
}
