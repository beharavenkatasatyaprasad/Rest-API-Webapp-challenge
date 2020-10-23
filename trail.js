const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');



async function getcovidCases(){
    const rescovid = await fetch ('https://api.covid19api.com/summary');
    const covid = await rescovid.json();
    displayCountries(covid);
}
getCovidCases();

function displayCountries(covid){
    async function getCountries(){
        const res = await fetch ('https://restcountries.eu/rest/v2/all');
        const countries = await res.json();
        const cflag = countries[0].flag;
        return cflag;
    }
    const flag = getCountries();

    countriesEl.innerHTML = '';
    covid.forEach(country => {
        const countryEl = document.createElement('div');
        countryEl.classList.add('card');

		countryEl.innerHTML = `
            <div>
                <img src="${country.flag}" alt="Germany" />
            </div>
            <div class="card-body">
                <h3 class="country-name">${country.name}</h3>
                <p>
                    <strong>Population:</strong>
                    ${country.population}
                </p>
                <p>
                    <strong>Confirmed Cases:</strong>
                    ${country.TotalConfirmed}
                </p>               
                <p class="country-region">
                    <strong>Region:</strong>
                    ${country.region}
                </p>

            </div>
        `;
        countriesEl.appendChild(countryEl);
   
    });
}
toggleBtn.addEventListener("click",() =>{
    document.body.classList.toggle('dark');
})