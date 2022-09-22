// Компоненты, хуки, контекст
import React, { useContext } from "react";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { WeatherContext } from "../../contexts/Weather.context";

// Иконки
import { FiSunrise, FiSunset } from "react-icons/fi";
import { BsCloudRain } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiWind } from "react-icons/bi";

// Интерфейсы
import { IAllWeatherData } from "../../interfaces/allWeatherData.interface";

// Библиотеки
import dayjs from "dayjs";

// Интерфейс компанента
interface ICompMainInfo {
    className: string;
}

// Компонент отвечает за отображение данных погоды на данный момент
export const MainInfo: React.FC<ICompMainInfo> = ({ className }) => {
    const data = useContext<IAllWeatherData>(WeatherContext);

    /*Минимальная и максимальная температура на сегодня*/
    const maxTemp: number = Math.round(data.daily[0].temp.max - 273);
    const minTemp: number = Math.round(data.daily[0].temp.min - 273);

    /*Время расвета и заката*/
    const sunRise = dayjs(data.current.sunrise * 1000).format("HH:mm");
    const sunSet = dayjs(data.current.sunset * 1000).format("HH:mm");

    /*Ощущаемая и действительная температура*/
    const feelsLike = Math.round(data.current.feels_like - 273);
    const currentTemp = Math.round(data.current.temp - 273);

    /*Скорость ветра*/
    const windSpeed = data.current.wind_speed;

    /*Кол-во осадков*/
    const rain = "rain" in data.daily[0] ? data.daily[0].rain + "mm" : "0";
    const snow = "snow" in data.daily[0] ? data.daily[0].snow + "mm" : "0";
    const drops = snow !== "0" ? snow : rain;

    /*Иконка текущей погоды*/
    const weatherIcon = data.current.weather[0].icon;

    return (
        <div className={`MainInfo ${className}`}>
            <div className="MainInfo__container">
                <div className="MainInfo__top">
                    {/*Отображение иконки текущей погоды*/}
                    <div className="MainInfo__icon-container">
                        <WeatherIcon
                            className={`MainInfo__WeatherIcon`}
                            weather={weatherIcon}
                        />
                    </div>

                    {/*Отображение температурных параметров*/}
                    <div className="MainInfo__tempt-data">
                        <div className="MainInfo__main-temp">
                            {currentTemp}°
                        </div>

                        <div className="MainInfo__fills-like">
                            Feels Like {feelsLike}°
                        </div>
                        <div className="MainInfo__min-max">
                            <div className="MainInfo__min">
                                <AiOutlineArrowDown
                                    className={`icon MainInfo__min-icon`}
                                />{" "}
                                {minTemp}°
                            </div>
                            <div className="MainInfo__max">
                                <AiOutlineArrowUp
                                    className={`icon MainInfo__max-icon`}
                                />{" "}
                                {maxTemp}°
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MainInfo__line-container">
                    <div className="MainInfo__line" />
                </div>

                <div className="MainInfo__bottom">
                    {/*Отображение информации о ветре и дожде на сейчас*/}
                    <div className="MainInfo__left">
                        <div className="MainInfo__wind">
                            <BiWind className={`icon`} /> {windSpeed}m/s
                        </div>
                        <div className="MainInfo__rain">
                            <BsCloudRain className={`icon`} /> {drops}
                        </div>
                    </div>

                    {/*Отображение времени рассвета и заката*/}
                    <div className="MainInfo__right">
                        <div className="MainInfo__sunUp">
                            <FiSunrise className={`icon`} /> {sunRise}
                        </div>
                        <div className="MainInfo__sunDown">
                            <FiSunset className={`icon`} /> {sunSet}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
