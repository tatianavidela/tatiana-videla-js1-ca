
const url = "http://api.tvmaze.com/shows";

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(url)
        const results = await response.json();

        resultsContainer.innerHTML="";

        for (let i = 0; i < results.length; i++) {
            console.log(results[i].id);

            resultsContainer.innerHTML+=`<a href="details.html?id=${results[i].id}">
                                            <h3>${results[i].name}</h3>
                                            <p> Rating: ${results[i].rating.average}</p>
                                            <img src="${results[i].image.medium}" alt="${results[i].name}"/>
                                            </a> `;
    
            if (i === 6) {
                break;
            }
        }
        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("Ops! something went wrong");
    }

}

makeApiCall();

