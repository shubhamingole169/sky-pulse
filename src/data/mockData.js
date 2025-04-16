const initialData = [
    {
      name: "Tokyo",
      temperature: 22,
      condition: "Sunny",
      humidity: 60,
      forecast: [
        { day: "Mon", temperature: 23, condition: "Sunny" },
        { day: "Tue", temperature: 21, condition: "Cloudy" },
        { day: "Wed", temperature: 20, condition: "Rainy" },
        { day: "Thu", temperature: 24, condition: "Sunny" },
        { day: "Fri", temperature: 22, condition: "Cloudy" },
      ],
    },
    {
      name: "London",
      temperature: 15,
      condition: "Rainy",
      humidity: 80,
      forecast: [
        { day: "Mon", temperature: 14, condition: "Rainy" },
        { day: "Tue", temperature: 16, condition: "Cloudy" },
        { day: "Wed", temperature: 15, condition: "Rainy" },
        { day: "Thu", temperature: 17, condition: "Sunny" },
        { day: "Fri", temperature: 16, condition: "Cloudy" },
      ],
    },
    {
      name: "New York",
      temperature: 18,
      condition: "Cloudy",
      humidity: 70,
      forecast: [
        { day: "Mon", temperature: 19, condition: "Cloudy" },
        { day: "Tue", temperature: 17, condition: "Sunny" },
        { day: "Wed", temperature: 18, condition: "Rainy" },
        { day: "Thu", temperature: 20, condition: "Sunny" },
        { day: "Fri", temperature: 19, condition: "Cloudy" },
      ],
    },
    {
      name: "Sydney",
      temperature: 25,
      condition: "Sunny",
      humidity: 55,
      forecast: [
        { day: "Mon", temperature: 26, condition: "Sunny" },
        { day: "Tue", temperature: 24, condition: "Cloudy" },
        { day: "Wed", temperature: 23, condition: "Sunny" },
        { day: "Thu", temperature: 27, condition: "Sunny" },
        { day: "Fri", temperature: 25, condition: "Cloudy" },
      ],
    },
    {
      name: "Paris",
      temperature: 17,
      condition: "Cloudy",
      humidity: 75,
      forecast: [
        { day: "Mon", temperature: 16, condition: "Cloudy" },
        { day: "Tue", temperature: 18, condition: "Sunny" },
        { day: "Wed", temperature: 17, condition: "Rainy" },
        { day: "Thu", temperature: 19, condition: "Sunny" },
        { day: "Fri", temperature: 18, condition: "Cloudy" },
      ],
    },
  ];
  
  export function getWeatherData() {
    const storedData = localStorage.getItem("weatherData");
    if (!storedData) {
      saveWeatherData(initialData);
      return initialData;
    }
    return JSON.parse(storedData);
  }
  
  export function saveWeatherData(data) {
    localStorage.setItem("weatherData", JSON.stringify(data));
  }