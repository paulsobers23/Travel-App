const places = 'https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm';

const quotes = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/anytime?inboundpartialdate=anytime';

const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: {
		  'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
		  'x-rapidapi-key': 'e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0',
  },
})
		  .catch((err) => {
		    console.log(err);
		  });

const cities = async (startPoint, destination) => {
  const browseCities = `https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${startPoint}/${destination}/anytime`;


  const data = await requestMethod('GET', browseCities);
  const results = await data.json();
  console.log(results);

  const places = results.Places.map((place) => {
    const countryName = place.CountryName;
    const cityName = place.CityName;
    const airportCode = place.IataCode;
    console.log(cityName);
    console.log(countryName);
    console.log(airportCode);
  });
};

cities('NYC', 'LON');


const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('budget');
  const budget = Number(input.value);

  if (isNaN(budget)) {
    document.body.innerHTML += `
        <p> Please enter a number</p>
        
    `;
  }
  if (budget < 500) {
    document.body.innerHTML += `
        <p> We apologize but the lowest amount of money to use this app is $500</p>
    `;
  } else {
    console.log(budget);
  }
});

