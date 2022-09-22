// Хуки, компаненты, контекст
import { useEffect, useState } from "react";
import Layout from "./Layout";
import { WeatherContext } from "./contexts/Weather.context";

// Интерфейсы
import { IAllWeatherData } from "./interfaces/allWeatherData.interface";

// Главный компанент приложения
export default function App() {
    /*Информация о погоде*/
    const [weather, setWeather] = useState<IAllWeatherData>(null);

    /*При первой загрезке мы получаем всю информацию о погоде в городе*/
    useEffect(() => {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=56.0090968&lon=92.8725147&appid=00717162368e083ab66a2d29a6b91378"
        ).then((ans) => {
            ans.json().then((data) => {
                console.log(data);
                setWeather(data);
            });
        });
    }, []);

    return (
        <>
            {!!weather && (
                <WeatherContext.Provider value={weather}>
                    <Layout />
                </WeatherContext.Provider>
            )}
        </>
    );
}
