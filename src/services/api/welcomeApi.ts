import axios from "axios";

const API_KEY = 'Z55akMU6sSGOoG8aAEAUUv4XA8AMNGZb';

export async function getWeather(cityCode: string) {
   const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${cityCode}`;

   try {
      const response = await axios.get(url, {params: {apikey: API_KEY}});

      return response.data;
   } catch (err) {
      return err;
   }
}