const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');


async function checkWeather (city){
	const api_key = "250147a4c870fc4f8939a418d4149d2a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


	const weather_data= await fetch(`${url}`).then(response => response.json());
	console.log(weather_data);

	if (weather_data.cod===`404`){
		location_not_found.style.display="flex";
		console.log("error");
		return;
		
	}

	temperature.innerHTML=`${Math.round (weather_data.main.temp -273.15)}°C`;
	description.innerHTML = `${weather_data.weather[0].description}`;
	humidity.innerHTML=`${weather_data.main.humidity}%`;
	wind_speed.innerHTML=`${weather_data.wind.speed}km/h`;
	

	switch (weather_data.weather[0].main){
		case 'cloud':
			weather_img.src="/assests/cloud.png"
			break;
		case 'Clear':
			weather_img.src="/assets/clear.png";
			break;
		case 'Rain':
			weather_img.src="/assets/rain.png";
			break;
		case 'Mist':
			weather_img.src="/assets/mist.png";
			break;	
		case 'Snow':
			weather_img.src="/assets/snow.png";
			break;	
	}

	console.log(weather_data);


}

searchBtn.addEventListener('click', () =>{
	checkWeather(inputBox.value);

});


