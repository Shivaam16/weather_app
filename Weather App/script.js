const apikey = "955f18302d0152c66638bf38792ed782";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchvalue = document.querySelector(".search input");
const searchbtn = document.querySelector(".circle");

async function checkwheather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  const wheathericon = document.querySelector(".wheather-logo");
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp1").innerHTML =
    Math.round(data.main.temp) + `°C`;
  document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind").innerHTML = data.wind.speed + ` Km/h`;
  if (data.weather[0].main == "Clouds") {
    wheathericon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    wheathericon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    wheathericon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    wheathericon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    wheathericon.src = "./images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
  checkwheather(searchvalue.value);
});
