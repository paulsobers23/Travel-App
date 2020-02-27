const url2 = 'https://randomuser.me/api'
const rapidApiUrl = 'https://cors-anywhere.herokuapp.com//https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm'

const requestMethod = (method, url , data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: {
		  "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		  "x-rapidapi-key": "e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0"
		}
		})
		  .then((response)=>{
		    console.log(response)
		  })
		  .catch( err => {
		    console.log(err)
		  })
};

const getData = async() =>{
  const data = await requestMethod('GET',rapidApiUrl)
  // const response = await data.json
  
  return data
}
getData()