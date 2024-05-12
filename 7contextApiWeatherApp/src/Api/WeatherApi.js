

const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=f9d648f7f15a43d2a42171352233012';

export const weatherApiData = async (cityName) => {
    const apiResponse = await fetch(`${baseUrl}&q=${cityName}&aqi=yes`);
    return await apiResponse.json();
} 


export const weatherApiDataCurrentLocation = async (latitude, longitude) => {
    const apiResponse = await fetch(`${baseUrl}&q=${latitude},${longitude}&aqi=yes`);
    return await apiResponse.json();
} 