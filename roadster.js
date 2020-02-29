

async function callApi() {

    try {
        const response = await fetch("https://api.spacexdata.com/v3/roadster");
        const json = await response.json();
        console.log("json: ", json)

        document.getElementById("earth_distance_km").innerHTML = json.earth_distance_km;
        document.getElementById("mars_distance_km").innerHTML = json.mars_distance_km;
        document.getElementById("speed_mph").innerHTML = json.speed_mph;


    } catch (error) {
        console.log(error);
    }
}

callApi();
