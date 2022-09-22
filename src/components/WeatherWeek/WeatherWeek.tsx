// Хуки, компаненты, контекст
import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/Weather.context";
import { WeatherWeekCard } from "./WeatherWeekCard/WeatherWeekCard";

// Интерфэйсы
import { IAllWeatherData } from "../../interfaces/allWeatherData.interface";

// Интерфэйс компанента
interface ICompWeatherWeek {
    className: string;
}

// Компанент отвечает за отресовку погоды на неделю
export const WeatherWeek: React.FC<ICompWeatherWeek> = ({ className }) => {
    const data = useContext<IAllWeatherData>(WeatherContext);

    return (
        <div className={`WeatherWeek ${className}`}>
            <div className="WeatherWeek__name">7 Day Forecast</div>
            <div className="WeatherWeek__container">
                {data.daily.map((el) => {
                    return (
                        <WeatherWeekCard
                            key={el.dt}
                            className={"WeatherWeek__WeatherWeekCard"}
                            weather={el}
                        />
                    );
                })}
            </div>
        </div>
    );
};
