import React from "react";

// Интерфасе компанента
interface ICompWeatherName {
    className: string;
    weather: string;
}

// sunny, moony, cloudy, rain, thunder, snow, mist
// Компонент возвращает название погоды в зависимости от входного параметра
export const WeatherName: React.FC<ICompWeatherName> = ({
    className,
    weather,
}) => {
    const getName = (): string => {
        switch (weather) {
            /*clear sky*/
            case "01d":
                return "sunny";
            case "01n":
                return "moony";

            /*few clouds*/
            case "02d":
                return "cloudy";
            case "02n":
                return "cloudy";

            /*scattered clouds*/
            case "03d":
                return "cloudy";
            case "03n":
                return "cloudy";

            /*broken clouds*/
            case "04d":
                return "cloudy";
            case "04n":
                return "cloudy";

            /*shower rain*/
            case "09d":
                return "rain";
            case "09n":
                return "rain";

            /*rain*/
            case "10d":
                return "rain";
            case "10n":
                return "rain";

            /*thunderstorm*/
            case "11d":
                return "thunder";
            case "11n":
                return "thunder";

            /*snow*/
            case "13d":
                return "snow";
            case "13n":
                return "snow";

            /*mist*/
            case "50d":
                return "mist";
            case "50n":
                return "mist";

            default:
                return "nun";
        }
    };

    return <div className={`WeatherName ${className}`}>{getName()}</div>;
};
