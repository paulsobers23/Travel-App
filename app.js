const getFlights = (origin, destination, departureDate) => {
	let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${departureDate}`
	return fetch(url, {
		method: 'GET',
		headers: {
				'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
				'x-rapidapi-key': 'e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0',
		},
	  })
	.then(res => res.json())
	.catch((response) => {
		const error = new Error('Something went wrong');
		error.data = response;
		console.log(error);
		});
};