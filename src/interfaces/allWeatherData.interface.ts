import {ICurrentWeatherData} from "./currentWeatherData.interface";
import {IDailyWeatherData} from "./dailyWeatherData.interface";
import {IHourlyWeatherData} from "./hourlyWeatherData.interface";

export interface IAllWeatherData {
    alerts: any[]
    current: ICurrentWeatherData
    daily: IDailyWeatherData[]
    hourly: IHourlyWeatherData[]
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
}