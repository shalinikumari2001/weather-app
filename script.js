const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42d6d42b74msh252601e68158475p1f1bddjsnb5f70fd8be87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city)=>{

	cityname.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {


		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		// wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		Wind2.innerHTML = response.wind_speed
		console.log(response);
	})
	.catch((err) => console.error(err));
}
submit.addEventListener('click',(e)=>{
	e.preventDefault();
	getweather(city.value);
})
