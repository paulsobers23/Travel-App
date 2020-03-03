const searchTripAdvisor = (method, url, data) => fetch(url, {
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
const getHotelsByLatLng = async (latitude, longitude) => {
  const url = ` https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?limit=10&latitude=${latitude}&longitude=${longitude}`
  const response = await searchTripAdvisor('GET', url);
  const data = await response.json();
  const results = data.data
  return results
}

// Responsible for getting cities latitude and longitude
const getCityByLatLng = async (city) =>{
  const url = `https://tripadvisor1.p.rapidapi.com/locations/search?query=${city}`
  const response = await searchTripAdvisor('GET',url)
  const data = await response.json()
  const latitude = data.data[0].result_object.latitude
  const longitude = data.data[0].result_object.longitude
  return getHotelsByLatLng(latitude,longitude)
}

// let newYorkHotels = getCityByLatLng('new york')
// // let minPriceOfnyHotels = newYorkHotels.then(hotels => getMinPrice(hotels))

function getMinPrice(arrOfHotel){
  let num = arrOfHotel.reduce((minPrice, hotel) =>{
    hotel = hotel.price.split(' - ')
    let price = hotel[0]
    console.log(price)
    return minPrice < price  ? minPrice : price
  },Infinity);
  return num
};