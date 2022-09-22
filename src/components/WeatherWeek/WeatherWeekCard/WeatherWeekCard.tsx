// Компоненты
import React from "react";
import { WeatherIcon } from "../../WeatherIcon/WeatherIcon";

// Интерфейсы
import { IDailyWeatherData } from "../../../interfaces/dailyWeatherData.interface";

// Библиотеки
import dayjs from "dayjs";

// Интерфейс компанента
interface ICompWeatherWeekCard {
    className: string;
    weather: IDailyWeatherData;
}

// Компанент отвечает за отресовку карточки погоды за день
export const WeatherWeekCard: React.FC<ICompWeatherWeekCard> = ({
    className,
    weather,
}) => {
    /*Максимальная и минимальная температура*/
    const maxTemp = Math.round(weather.temp.max - 273);
    const minTemp = Math.round(weather.temp.min - 273);

    /*Иконка погоды*/
    const weatherIcon = weather.weather[0].icon;

    /*День недели*/
    const weak = dayjs(weather.dt * 1000).format("dddd");

    return (
        <div className={`WeatherWeekCard ${className}`}>
            <div className="WeatherWeekCard__container">
                <div className="WeatherWeekCard__date">{weak}</div>
                <div className="WeatherWeekCard__weatherIcon">
                    <WeatherIcon
                        className={`WeatherWeekCard__WeatherIcon`}
                        weather={weatherIcon}
                    />
                </div>
                <div className="WeatherWeekCard__temp">
                    {maxTemp}°/{minTemp}°
                </div>
            </div>
        </div>
    );
};
