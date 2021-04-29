
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

//contact page

const form = document.querySelector("#contact-form");
const thename = document.querySelector("#name");
const nameError = document.querySelector ("#nameError")
const subject = document.querySelector ("#subject")
const subjectError = document.querySelector ("#subjectError")
const email = document.querySelector ("#email")
const emailError = document.querySelector ("#emailError")
const address = document.querySelector ("#address")
const addressError = document.querySelector ("#addressError")


function validateForm (event) {
    event.preventDefault();

    if(checkLength(thename.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}



form.addEventListener ("submit", validateForm);


function checkLength (value, len){
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
