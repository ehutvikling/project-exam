

async function callApi() {

    try {
        const response = await fetch("https://api.spacexdata.com/v3/launches?rocket_id=falconheavy");
        const json = await response.json();
        var results = [];



        loopThroughResults(json);
    } catch (error) {
        console.log(error);
    }
}
callApi();


function loopThroughResults(results) {

    const resultsContainer = document.getElementById("launches");
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.innerHTML = '<h3> No upcoming lauches found </h3>';
        return
    }

    var i = 0;
    results.forEach(function (launch) {

        var side = i % 2 == 0 ? "left" : "right";
        i++;



        var date = new Date(launch.launch_date_unix * 1000);
        console.log("date: ", date);

        var dateString = date.toLocaleString();

        if (!launch.details) launch.details = "";

        resultsContainer.innerHTML += `<div class="container-t ${side}">
            <div class="content">
                    <h2>${dateString}</h2>
                    <h3>${launch.mission_name}</h3>
                    <p>${launch.details}</p>

                   
                </div>
            </div>`;
    });


}