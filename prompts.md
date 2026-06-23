# Prompts Log - Sprint 3: Weather-Cast

To accelerate the development process, resolve specific network handling blockers, and ensure my asynchronous logic met the engineering requirements, I utilized AI (Gemini) during this sprint. Below is the log of the prompts used:

### Prompt 1

**Tool Used:** Gemini  
**Prompt:** "I am getting an error after fetching the API. Can you help me use a try/catch block to show this network or 'city not found' error message directly on the HTML screen?"  
**Help Received:** Learned how to implement a `try/catch` block within an `async/await` function to gracefully handle network failures and 404 errors. Understood how to capture the API error and dynamically inject a user-friendly, red warning message into the DOM instead of letting the application break silently or just showing a console error.

### Prompt 2

**Tool Used:** Gemini  
**Prompt:** "How do I use the fetch() API with modern async/await syntax to get weather data for a hardcoded city like 'London', and inject the exact temperature and humidity into my specific HTML IDs?"  
**Help Received:** Understood the correct way to construct the external API URL by passing the API key and city dynamically using template literals (`${}`). Learned how to parse the returned JSON payload and use DOM manipulation (`textContent`) to instantly render the live data onto the screen, completely avoiding legacy `.then()` chains.
