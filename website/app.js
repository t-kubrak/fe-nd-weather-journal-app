/* Global Variables */
const apiKey = 'daed44c51ba32e2da425955ad7492dd2';
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`;

const generateBtn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// GET requests
const getServerData = async (url = '') =>{
    const response = await fetch(url);

    try {
        return await response.json()
    } catch (error) {
        console.log("error", error);
    }
};

const getWeatherData = async (baseUrl, apiKey, zipCode) =>{
    const response = await fetch(`${baseUrl}${zipCode},us&appid=${apiKey}`);

    try {
        return await response.json()
    } catch (error) {
        console.log("error", error);
    }
};

const postDataToTheServer = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await response.json();
    } catch (error) {
        console.log("error", error);
    }
};

// Event listeners
generateBtn.addEventListener('click', (e) => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeatherData(baseUrl, apiKey, zipCode)
        .then((weatherData) => {
            postDataToTheServer('/add', {
                temperature : weatherData.main.temp,
                date : newDate,
                userResponse : feelings
            })
        });
});