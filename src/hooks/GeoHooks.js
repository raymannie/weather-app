import { useState, useEffect } from "react";

const useGeoHooks = () => {

    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState("C");
    const [error, setError] = useState(false);
    const API_KEY_ALT = "270298b16e054ddebe282429232204"

    const getWeatherData = async (query) => {
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY_ALT}&q=${query}&days=7`,)
            .then(response => response.json())
            .then(async data => {
                setWeatherData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };


    useEffect(() => {
        setLoading(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                    .then(response => response.json())
                    .then(async data => {
                        const { countryName, principalSubdivision } = data;
                        setLocation({ country: countryName, state: principalSubdivision });
                        getWeatherData(principalSubdivision)
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error(error);
                        setError(true)
                        setLoading(false);
                    });
            });
        } else {
            setLoading(false);
        }
    }, []);

    const handleSearch = async (query) => {
        setLoading(true);
        getWeatherData(query)
    };

    const handleUnitChange = () => {
        setUnit(unit === "C" ? "F" : "C");
    };

    return {
        weatherData,
        loading,
        unit,
        setUnit,
        location,
        handleSearch,
        handleUnitChange,
        error,
    };
}

export default useGeoHooks;