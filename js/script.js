
const url = " http://api.tvmaze.com/shows"
const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(url)
        const results = await response.json();

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].name);
    
            if (i === 10) {
                break;
            }
        }
        console.log(results);
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }

}

makeApiCall();
