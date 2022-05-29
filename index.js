
const api_key = "b8cc80859e947ab647c586cd20ab2dc8";

const daily = 7;

async function getData(lat, lon){
    let city = document.getElementById('city').value;

    let url =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${daily}&appid=${api_key}`
    try{
        let res = await fetch(url);

        let data = await res.json();
        console.log(data.daily);
        append(data.daily);
       
    }catch(err){
        console.log(err);
    }
}

function geoLocationWeather(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getData(latitude, longitude)

        console.log(latitude);
        console.log(longitude)
    }
}
geoLocationWeather();

async function append(data){
    data.forEach(function (ele){
        let container = document.getElementById("container");
        // container.innerHTML = null;

        //     fetch(312.19)
        // .then(function(res){
        //     return res.json();
        // })
        // .then(function(res){
        //     // append(res.Search);
        //     console.log(res.max);
        // })

        // .catch(function (err){
        // console.log("err:", err)
        // });

        let div = document.createElement('div');

        let sunrise = document.createElement("p");
        sunrise.innerText = `Sun Rise: ${ele.sunrise}`
    
        
    
        let sunset = document.createElement("p");
        sunset.innerText = `Sun Set:- ${ele.sunset}`;
    
        let windSpeed = document.createElement("p");
        windSpeed.innerText = `Wind Speed:- ${ele.wind_speed}`;
    
        let maxTemp = document.createElement("p");
        maxTemp.innerText = `Max Temp:- ${ele.temp.max}`;
    
        let minTemp = document.createElement("p");
        minTemp.innerText = `Min Temp:- ${ele.temp.min}`;
    
        div.append(sunrise, sunset, windSpeed,  maxTemp, minTemp);
        container.append(div);
    })
}
