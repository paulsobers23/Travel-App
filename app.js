const places = 'https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm'
const browseQuotes = 'https://cors-anywhere.herokuapp.com/https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/anytime?inboundpartialdate=anytime'


const requestMethod = (method, url , data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: {
		  "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		  "x-rapidapi-key": "e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0"
		}
		})
		  .catch( err => {
		    console.log(err)
		  })
};

const getData = async() =>{
  const data = await requestMethod('GET',browseQuotes)
  const results = await data.json()
  console.log(results)
  return results
}

getData()
