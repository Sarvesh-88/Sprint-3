#  Prodesk IT - Sprint 03: Weather-Cast

A dynamic, live-data integration web application built for the Sprint 03 engineering requirements. This project demonstrates proficiency in communicating with external APIs, managing asynchronous JavaScript timing, and dynamically rendering external JSON payloads to the UI.

##  Important Links

* **Live Website:** https://sprint-3-project.vercel.app/
* **Demo Video:** https://drive.google.com/file/d/1Ftn6xQi_wBJCbl1ZsB0K7N80YxgUMG7r/view?usp=drivesdk

## Screenshot

*(https://github.com/Sarvesh-88/Sprint-3/blob/main/Sprint-3-img.png)*

##  Tech Stack

* **HTML5**
* **Vanilla CSS3**
* **Vanilla JavaScript (ES6+)**
* **RESTful API Integration** (OpenWeatherMap)

##  Features Completed (Phase 1: Base MVP)

The following mandatory Phase 1 requirements have been successfully completed:

* **API Integration:** Successfully integrated the OpenWeatherMap API. Utilized the native JavaScript `fetch()` API to request live weather data for the required hardcoded city ("London").
* **Asynchronous Logic:** Managed network requests strictly using modern `async / await` syntax and `try/catch` blocks for robust error handling, completely avoiding legacy `.then()` chains.
* **DOM Injection:** Successfully parsed the returned external JSON payload and dynamically injected specific live data points into the HTML DOM (Current Temperature, Weather Condition, and Humidity).
* **Architecture Constraint:** Ensured optimal configuration management by passing the API Key as a designated secure variable, rather than hardcoding it directly into the fetch URL string.
