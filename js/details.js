const detailContainer = document.querySelector(".show-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id= params.get("id");

console.log(id)

const url = "http://api.tvmaze.com/shows/"+ id;

async function fetchShow () {
    try {
        const response = await fetch (url);
        const details = await response.json();

        console.log(details)

        createhtml(details);
    }
    catch (error){
        console.log(error);
        detailContainer.innerHTML =  displayError("Ops! something went wrong");
    }
}

fetchShow();


function createhtml (details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>`
}
