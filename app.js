const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: {
		  'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
		  'x-rapidapi-key': 'e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0',
  },
})
		  .catch((response) => {
		    const error = new Error('Something went wrong')
		    error.data = response
		    console.log(error)
		    throw error
		  });

// Responsible for locating hotels by the location id and list the name and prices
const getHotelsByCity = async (locationID) =>{
  const hotelAPI = `https://tripadvisor1.p.rapidapi.com/hotels/list?location_id=${locationID}&adults=1&rooms=1`
  const data = await requestMethod('GET', hotelAPI);
  const response = await data.json();
  console.log(response);
  const results = response.data.map((hotels)=>{
    const hotelName = hotels.name
    const hotelPrice = hotels.price
    return `Hotel Name: ${hotelName}\n Hotel Price: ${hotelPrice}\n`
  })
  console.log(results)
  return results
  
}
getHotelsByCity('60763')
