import { MainInfo } from "./components/MainInfo/MainInfo";
import { WeatherDay } from "./components/WeatherDay/WeatherDay";
import { WeatherWeek } from "./components/WeatherWeek/WeatherWeek";

export default function Layout() {
    return (
        <div className={`Layout`}>
            <div className="Layout__head">Weather app</div>
            {/*<div className="Layout__search">Поиск</div>*/}
            <MainInfo className="Layout__MainInfo" />
            <div className="Layout__weather-today">
                <WeatherDay className={`Layout__WeatherDay`} />
            </div>
            <div className="Layout__weather-week">
                <WeatherWeek className={`Layout__WeatherWeek`} />
            </div>
        </div>
    );
}
