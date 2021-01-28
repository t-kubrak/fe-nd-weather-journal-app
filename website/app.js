/* Global Variables */
const apiKey = 'daed44c51ba32e2da425955ad7492dd2';
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`;

const generateBtn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// GET request
const getData = async (baseUrl, apiKey, zipCode) =>{
    const response = await fetch(`${baseUrl}${zipCode},us&appid=${apiKey}`);

    try {
        return await response.json()
    }
    catch(error) {
        console.log("error", error);
    }
};

// Event listeners
generateBtn.addEventListener('click', (e) => {
    const zipCode = document.getElementById('zip').value;
    getData(baseUrl, apiKey, zipCode);
});