import {IWeatherInfo} from "./weatherInfo.interface";

export interface ICurrentWeatherData {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pressure: number
    rain?: {"1h": number}
    snow?: {"1h": number}
    sunrise: number
    sunset: number
    temp: number
    uvi: number
    visibility: number
    weather: IWeatherInfo[]
    wind_deg: number
    wind_gust?: number
    wind_speed: number
}