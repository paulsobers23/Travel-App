const unirest = require("unirest");

const req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/");
const req2 = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/anytime");

const browseDates = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/anytime");


req2.query({
	"query": "Stockholm",
	"inboundpartialdate": "anytime"
});

req2.headers({
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0"
});


req2.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

