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


const cities = async () => {
  // const browseCities = `https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${startPoint}/${destination}/anytime`;
  // const getData = `https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-GB/?query=${city}`;
  
  const travelAPI = 'https://cors-anywhere.herokuapp.com/https://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=NYC&destination=LON&token=e00615a70c41683257cdcb59315db019'
  const data = await requestMethod('GET', travelAPI);
  const results = await data.json();
  console.log(results);
  
   

  // let places = results.Places.map((place) => {
  //   const countryName = place.CountryName;
  //   const cityName = place.CityName;
  //   const airportCode = place.IataCode;
  //   console.log(cityName);
  //   console.log(countryName);
  // });
};

cities();


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
