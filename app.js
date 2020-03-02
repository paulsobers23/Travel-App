const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: {
		  'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
		  'x-rapidapi-key': 'e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0',
  },
})
		  .catch((response) => {
		    const error = new Error('Something went wrong');
		    error.data = response;
		    console.log(error);
		    throw error;
});
		  

// Responsible for locating hotels by the latitude and longitude and list the name and prices
const getHotelsByCity = async (latitude, longitude) => {
  const hotelAPI2 = ` https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?latitude=${latitude}&longitude=${longitude}`
  
  const data = await requestMethod('GET', hotelAPI2);
  const response = await data.json();
  console.log(data);
  const results = response.data.map((hotels) => {
    const hotelName = hotels.name;
    const hotelPrice = hotels.price;
    return `Hotel Name: ${hotelName}\n Hotel Price: ${hotelPrice}\n`;
  });
  console.log(results);
  return results;
};

// Responsible for getting cities latitude and longitude
const getCity = async (city) =>{
  const searchCity = `https://tripadvisor1.p.rapidapi.com/locations/search?query=${city}`
  
  const getData = await requestMethod('GET',searchCity)
  const response = await getData.json()
  const latitude = response.data[0].result_object.latitude
  const longitude = response.data[0].result_object.longitude
  console.log(response)
  console.log(latitude)
  console.log(longitude)
  getHotelsByCity(latitude,longitude)
}
//getCity('Albany')
