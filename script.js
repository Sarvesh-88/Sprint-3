const API_KEY = 'a44dd7403185803c5f3b0be503f1c4fc'; 
        const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

        const weatherForm = document.getElementById('weatherForm');
        const cityInput = document.getElementById('nameCity');
        const errorMsg = document.getElementById('error-msg');

        const tempDisplay = document.getElementById('displayTemprature');
        const conditionDisplay = document.getElementById('displayCondition');
        const humidityDisplay = document.getElementById('displayHumidity');

        async function getWeatherData(cityName) {
            try {
               
                const requestUrl = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
                
            
                const response = await fetch(requestUrl);

                if (!response.ok) {
                    throw new Error(`City not found or server error.`);
                }

        
                const weatherData = await response.json();
                console.log("Data Received:", weatherData); 
                
              
                tempDisplay.textContent = `${weatherData.main.temp}°C`;
                conditionDisplay.textContent = weatherData.weather[0].main; 
                humidityDisplay.textContent = `${weatherData.main.humidity}%`;
                errorMsg.textContent = ""; 

            } catch (error) {
                console.error("Error details:", error);
                errorMsg.textContent = "Error: City not found. Please check spelling.";
                tempDisplay.textContent = "0";
                conditionDisplay.textContent = "0";
                humidityDisplay.textContent = "0";
            }
        }

        weatherForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const cityValue = cityInput.value.trim();
            
            if (cityValue) {
                getWeatherData(cityValue);
            } else {
                errorMsg.textContent = "Please enter a city name.";
            }
        });
