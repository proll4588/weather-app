// Компоненты
import React from "react";
import { WeatherIcon } from "../../WeatherIcon/WeatherIcon";
import { WeatherName } from "../../WeatherName/WeatherName";

// Библиотеки
import dayjs from "dayjs";

// Интерфейс компонента
interface ICompWeatherDayCard {
    className: string;
    weatherData: any;
}

// Компонент отвечает за отрисовку данных погоды за час
export const WeatherDayCard: React.FC<ICompWeatherDayCard> = ({
    className,
    weatherData,
}) => {
    /*Дата погоды*/
    const time = dayjs(weatherData.dt * 1000).format("Ha");

    /*Температура*/
    const temp = Math.floor(weatherData.temp - 273);

    /*Иконка погоды*/
    const weather = weatherData.weather[0].icon;

    return (
        <div className={`WeatherDayCard ${className}`}>
            <div className="WeatherDayCard__container">
                <div className="WeatherDayCard__time">{time}</div>
                <div className="WeatherDayCard__temp">{temp}</div>
                <div className="WeatherDayCard__weather">
                    <div className="WeatherDayCard__weather-icon-container">
                        <WeatherIcon
                            className={`WeatherDayCard__WeatherIcon`}
                            weather={weather}
                        />
                    </div>
                    <div className="WeatherDayCard__weather-name-container">
                        <WeatherName
                            className={`WeatherDayCard__weather-name`}
                            weather={weather}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
