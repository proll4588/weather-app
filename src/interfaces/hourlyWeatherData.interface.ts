import {IWeatherInfo} from "./weatherInfo.interface";

export interface IHourlyWeatherData {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    rain?: {"1h": number}
    snow?: {"1h": number}
    pop: number
    pressure: number
    temp: number
    uvi: number
    visibility: number
    weather: IWeatherInfo[]
    wind_deg: number
    wind_gust?: number
    wind_speed: number
}