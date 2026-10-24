/*
  ============================================================
  WEATHER DASHBOARD
  ============================================================

  Purpose:
  1. Read the city selected by the user.
  2. Fetch weather data from the FreeCodeCamp Weather API.
  3. Display the weather data on the webpage.
  4. Handle errors if the API request fails.

  Important concepts used:
  - DOM manipulation
  - Variables and constants
  - Async/await
  - Fetch API
  - Promises
  - try...catch error handling
  - Optional chaining (?.)
  - Nullish coalescing (??)
  - Event listeners
*/


// ============================================================
// PART 1: CONNECT JAVASCRIPT TO HTML
// ============================================================

/*
  document represents the current HTML document.

  document.getElementById("some-id") searches the HTML
  for an element whose id matches the given string.

  We store the returned elements in constants so that
  we can use them later without searching the DOM again.
*/

// Get the dropdown where the user selects a city.
const citySelect = document.getElementById("city-select");

// Get the button that the user clicks to request weather data.
const getWeatherBtn = document.getElementById("get-weather-btn");

// Get the image element that will display the weather icon.
const weatherIcon = document.getElementById("weather-icon");

// Get the element that will display the city's name.
const locationElement = document.getElementById("location");

// Get the element that will display the main weather condition,
// such as "Clear", "Clouds", or "Rain".
const weatherMain = document.getElementById("weather-main");

// Get the element that displays the actual temperature.
const mainTemperature = document.getElementById("main-temperature");

// Get the element that displays the feels-like temperature.
const feelsLike = document.getElementById("feels-like");

// Get the element that displays humidity.
const humidity = document.getElementById("humidity");

// Get the element that displays wind speed.
const wind = document.getElementById("wind");

// Get the element that displays wind gust speed.
const windGust = document.getElementById("wind-gust");


// ============================================================
// PART 2: FETCH WEATHER DATA FROM THE API
// ============================================================

/*
  async makes this function asynchronous.

  city is the function parameter. It receives the city selected
  by the user, for example "london" or "new york".

  This function is responsible only for retrieving weather data.
  It does not update the webpage.
*/
async function getWeather(city) {

  // try contains code that might produce an error.
  try {

    /*
      Build the API URL using the selected city.

      Template literals use backticks (` `) so we can insert
      a variable with ${...}.

      encodeURIComponent(city) safely encodes special characters
      in the city name for use in a URL.

      Example: "new york" becomes "new%20york".
    */
    const url =
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`;

    /*
      fetch() sends an HTTP request to the API and returns a Promise.

      await pauses this async function until the Promise settles,
      then gives us the Response object.

      The Response contains HTTP status information and the
      response body; the JSON data is parsed in the next step.
    */
    const response = await fetch(url);

    /*
      response.ok is true for successful HTTP statuses (200–299).

      If the server returns an unsuccessful status, throw an Error.
      Throwing transfers control to the catch block below.
    */
    if (!response.ok) {
      throw new Error(
        `Weather request failed: ${response.status}`
      );
    }

    /*
      response.json() reads and parses the response body as JSON.
      await waits until parsing finishes.

      return sends the parsed weather object back to the caller.
    */
    return await response.json();

  } catch (error) {

    /*
      If fetching, the HTTP check, or JSON parsing fails, execution
      reaches this catch block.

      console.error() helps us diagnose the failure in DevTools.
      Returning undefined signals that no usable data was returned.
    */
    console.error(error);

    return undefined;
  }
}


// ============================================================
// PART 3: DISPLAY THE WEATHER DATA
// ============================================================

/*
  showWeather(city) retrieves the data, then updates the HTML.

  Keeping data retrieval in getWeather() and DOM updates here
  separates two responsibilities and makes the code easier to read.
*/
async function showWeather(city) {

  // Wait for the weather object returned by getWeather().
  const data = await getWeather(city);

  /*
    If getWeather() failed, data will be undefined.

    Show the required error message and return immediately so
    the code below does not try to read properties from undefined.
  */
  if (data === undefined) {
    alert("Something went wrong, please try again later");
    return;
  }

  /*
    Display the city name.

    textContent changes the text inside an HTML element.
    The nullish coalescing operator (??) uses "N/A" only when
    data.name is null or undefined; values like 0 are preserved.
  */
  locationElement.textContent = data.name ?? "N/A";

  /*
    data.weather is an array, so [0] accesses its first item.
    Optional chaining (?.) safely stops if a property is null
    or undefined instead of throwing a TypeError.
  */
  weatherMain.textContent = data.weather?.[0]?.main ?? "N/A";

  // Display temperature and feels-like temperature in Celsius.
  mainTemperature.textContent = data.main?.temp ?? "N/A";
  feelsLike.textContent = data.main?.feels_like ?? "N/A";

  // Display relative humidity as a percentage.
  humidity.textContent = data.main?.humidity ?? "N/A";

  // Display wind speed and gust speed in metres per second.
  wind.textContent = data.wind?.speed ?? "N/A";
  windGust.textContent = data.wind?.gust ?? "N/A";

  // Read the icon URL from the first weather entry, if available.
  const iconUrl = data.weather?.[0]?.icon;

  /*
    Setting src tells the browser which image to load.
    If the API has no icon URL, use an empty string.
  */
  weatherIcon.src = iconUrl ?? "";

  // Use the condition as alternative text for accessibility.
  weatherIcon.alt =
    data.weather?.[0]?.main ?? "Weather icon unavailable";
}


// ============================================================
// PART 4: RESPOND TO THE BUTTON CLICK
// ============================================================

/*
  addEventListener() registers a callback for a specific event.
  Here, the callback runs whenever the button is clicked.
*/
getWeatherBtn.addEventListener("click", async function () {

  /*
    .value retrieves the selected option's value.
    For example, the visible label "New York" has value "new york".
  */
  const city = citySelect.value;

  /*
    An empty string is falsy, so !city is true when no city is selected.
    Return immediately to avoid sending an invalid API request.
  */
  if (!city) {
    return;
  }

  // Wait for the request and the resulting DOM updates to finish.
  await showWeather(city);
});
