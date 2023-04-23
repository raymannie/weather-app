import ClearDay from "../uploads/largeWeatherIcon/clear-day.svg"
import ClearNight from "../uploads/largeWeatherIcon/clear-night.svg"
import CloudyDay from "../uploads/largeWeatherIcon/cloudy-day.svg"
import CloudyNight from "../uploads/largeWeatherIcon/cloudy-night.svg"
import PartialCloudyDay from "../uploads/largeWeatherIcon/partial-cloud-day.svg"
import PartialCloudyNight from "../uploads/largeWeatherIcon/partial-cloud-night.svg"
import ShowerDay from "../uploads/largeWeatherIcon/shower-day.svg"
import ShowerNight from "../uploads/largeWeatherIcon/shower-night.svg"
import Rainy from "../uploads/largeWeatherIcon/rainy.svg"
import TunderStorm from "../uploads/largeWeatherIcon/thunderstorm.svg"

function WeatherIcon(code) {
    switch (code) {
        case 1000:
            return ClearDay;
        case "01n":
            return ClearNight;
        // case "02d":
        //     return CloudyDay;
        case "02n":
            return CloudyNight;
        case 1006:
            return CloudyDay;
        // case "03n":
        //     return CloudyNight;
        case 1003:
            return PartialCloudyDay;
        case "04n":
            return PartialCloudyNight;
        case 1183 || 1180 || 1153 || 1246:
            return ShowerDay;
        case "09n":
            return ShowerNight;
        case 1195 || 1192 || 1189 || 1186 || 1183:
            return Rainy;
        case 1273:
            return Rainy;
        // case "10n":
        //     return Rainy;
        case 1276:
            return TunderStorm;
        // case "11n":
        //     return TunderStorm;
        //   case "13d":
        //     return <WiDaySnow size={size} />;
        //   case "13n":
        //     return <WiNightSnow size={size} />;
        //   case "50d":
        //     return <WiDayFog size={size} />;
        //   case "50n":
        //     return <WiNightFog size={size} />;
        default:
            return null;
    }
}
export default WeatherIcon;