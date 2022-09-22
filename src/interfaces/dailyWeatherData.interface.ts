import {ITemp} from "./temp.interface";
import {IWeatherInfo} from "./weatherInfo.interface";

export interface IDailyWeatherData {
    clouds: number
    dew_point: number
    dt: number
    feels_like: ITemp
    humidity: number

    moon_phase: number
    moonrise: number
    moonset: number

    pop: number
    pressure: number

    rain?: number
    snow?: number

    sunrise: number
    sunset: number

    temp: ITemp
    uvi: number
    weather: IWeatherInfo[]
    wind_deg: number
    wind_gust?: number
    wind_speed: number
}