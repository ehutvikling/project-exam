
async function callApi() {

    try {
        const response = await fetch("https://api.spacexdata.com/v3/history");
        const json = await response.json();

        loopThroughResults(json);
    } catch (error) {
        console.log(error);
    }
}
callApi();


function loopThroughResults(results) {

    const resultsContainer = document.getElementById("history");
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.innerHTML = '';
        return
    }

    var i = 0;
    results.forEach(function (event) {

        var side = i % 2 == 0 ? "left" : "right";
        i++;

        var date = new Date(event.event_date_unix * 1000);
        console.log("date: ", date);

        var dateString = date.toLocaleString();

        if (!event.details) event.details = "";

        resultsContainer.innerHTML += `<div class="container-t ${side}">
            <div class="content">
                    <h2>${dateString}</h2>
                    <h3>${event.title}</h3>
                    <p>${event.details}</p>

                   
                </div>
            </div>`;
    });

}