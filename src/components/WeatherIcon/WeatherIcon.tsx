import React from "react";

//Иконки
import {
    BsCloudLightningRainFill,
    BsCloudSnow,
    BsCloudSnowFill,
    BsCloudSun,
    BsFillCloudMoonFill,
    BsFillCloudRainFill,
    BsFillCloudRainHeavyFill,
    BsFillMoonFill,
    BsSun,
} from "react-icons/bs";
import { AiFillCloud, AiOutlineCloud } from "react-icons/ai";
import { RiMistFill } from "react-icons/ri";

// Интерфасе компанента
interface ICompWeatherIcon {
    className: string;
    weather: string;
}

//Компонент возвращает иконку погоды в зависимости от входного параметра
export const WeatherIcon: React.FC<ICompWeatherIcon> = ({
    className,
    weather,
}) => {
    const getIcon = (): JSX.Element => {
        switch (weather) {
            /*clear sky*/
            case "01d":
                return <BsSun />;
            case "01n":
                return <BsFillMoonFill />;

            /*few clouds*/
            case "02d":
                return <BsCloudSun />;
            case "02n":
                return <BsFillCloudMoonFill />;

            /*scattered clouds*/
            case "03d":
                return <AiOutlineCloud />;
            case "03n":
                return <AiOutlineCloud />;

            /*broken clouds*/
            case "04d":
                return <AiFillCloud />;
            case "04n":
                return <AiFillCloud />;

            /*shower rain*/
            case "09d":
                return <BsFillCloudRainHeavyFill />;
            case "09n":
                return <BsFillCloudRainHeavyFill />;

            /*rain*/
            case "10d":
                return <BsFillCloudRainFill />;
            case "10n":
                return <BsFillCloudRainFill />;

            /*thunderstorm*/
            case "11d":
                return <BsCloudLightningRainFill />;
            case "11n":
                return <BsCloudLightningRainFill />;

            /*snow*/
            case "13d":
                return <BsCloudSnow />;
            case "13n":
                return <BsCloudSnowFill />;

            /*mist*/
            case "50d":
                return <RiMistFill />;
            case "50n":
                return <RiMistFill />;

            default:
                return <BsSun />;
        }
    };

    return <div className={`WeatherIcon ${className}`}>{getIcon()}</div>;
};
