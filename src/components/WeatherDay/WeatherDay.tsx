// Хуки, компоненты, контекст
import React, { useContext } from "react";
import { WeatherDayCard } from "./WeatherDayCard/WeatherDayCard";
import { WeatherDayCardNow } from "./WeatherDayCardNow/WeatherDayCardNow";
import { WeatherContext } from "../../contexts/Weather.context";

// Интерфейсы
import { IAllWeatherData } from "../../interfaces/allWeatherData.interface";

// Интерфейс компанента
interface ICompWeatherDay {
    className: string;
}

// Компонент отвечает за отображение погоды за 24 часа
export const WeatherDay: React.FC<ICompWeatherDay> = ({ className }) => {
    const data = useContext<IAllWeatherData>(WeatherContext);

    return (
        <div className={`WeatherDay ${className}`}>
            <div className="WeatherDay__name">Hourly Forecast</div>
            <div className="WeatherDay__container">
                <WeatherDayCardNow
                    className={`WeatherDay__WeatherDayCardNow`}
                    weatherData={data.hourly[0]}
                />
                {data.hourly
                    .filter((el, index) => index <= 24 && index !== 0)
                    .map((info) => {
                        return (
                            <WeatherDayCard
                                key={info.dt}
                                className={`WeatherDay__WeatherDayCard`}
                                weatherData={info}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
