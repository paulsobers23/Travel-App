const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: {
		  'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
		  'x-rapidapi-key': 'e7dc0e5c66msha7c62a4525b23dfp1beafdjsnd67679c4edc0',
  },
})
		  .catch((err) => {
		    console.log(err);
		  });


const getHotelsByLocation = () => {
  // const hotelAPI = `https://cors-anywhere.herokuapp.com/https://tripadvisor1.p.rapidapi.com/hotels/list?currency=USD&limit=30&order=asc&lang=en_US&sort=recommended&location_id=${location}&adults=${numOfAdults}&rooms=${numOfRooms}`
  
 
  if(navigator.geoleocation){
    navigator.geoleocation.getCurrentPostion(position => {
      console.log('My Position:', position)
      const longitude = position.coords.longitude
      const latitude = position.coords.latitude
      
      // const getApiInfo = async()=>{
        
      //   // const hotelAPI = `https://tripadvisor1.p.rapidapi.com/hotels/list?location_id=${locationID}&adults=1&rooms=1`
      //   const hotelAPI2 = 'https://cors-anywhere.herokuapp.com/https://tripadvisor1.p.rapidapi.com/hotels/list?location_id=4835000&adults=1&rooms=1'
        
      //   const data = await requestMethod('GET', hotelAPI2);
      //   const results = await data.json();
      //   console.log(results);
      // }
    
      
    })
  }
  
};

// getHotelsByLocation();


 const getApiInfo = async()=>{
      
      // const hotelAPI = `https://tripadvisor1.p.rapidapi.com/hotels/list?location_id=${locationID}&adults=1&rooms=1`
      const hotelAPI2 = 'https://cors-anywhere.herokuapp.com/https://tripadvisor1.p.rapidapi.com/hotels/list?location_id=1001&adults=1&rooms=1'
      
      const data = await requestMethod('GET', hotelAPI2);
      const results = await data.json();
      console.log(results);
}
getApiInfo()



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
