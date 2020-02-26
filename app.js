const getData = async() =>{
  
  const data = await fetch("https://cors-anywhere.herokuapp.com//https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0"
	}
})
  .catch(err => {
	console.log(err);
});
  console.log(data)
  return data
  
}

getData()

// fetch("https://cors-anywhere.herokuapp.com//https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
//   .catch(err => {
// 	console.log(err);
// });

