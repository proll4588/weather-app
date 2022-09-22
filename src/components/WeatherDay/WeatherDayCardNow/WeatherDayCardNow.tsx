// Компоненты
import React from "react";
import { WeatherIcon } from "../../WeatherIcon/WeatherIcon";

// Интерфейсы
import { IHourlyWeatherData } from "../../../interfaces/hourlyWeatherData.interface";

// Интерфейс компанента
interface ICompWeatherDayCardNow {
    className: string;
    weatherData: IHourlyWeatherData;
}

// Компанент отвечает за отрисовку карточки погоды на данный час
export const WeatherDayCardNow: React.FC<ICompWeatherDayCardNow> = ({
    className,
    weatherData,
}) => {
    /*Температура*/
    const temp = Math.floor(weatherData.temp - 273);

    /*Иконка погоды*/
    const weather = weatherData.weather[0].icon;

    return (
        <div className={`WeatherDayCardNow ${className}`}>
            <div className="WeatherDayCardNow__container">
                <div className="WeatherDayCardNow__now">Now</div>
                <WeatherIcon
                    className={`WeatherDayCardNow__WeatherIcon`}
                    weather={weather}
                />
                <div className="WeatherDayCardNow__temp">{temp}</div>
            </div>
        </div>
    );
};
