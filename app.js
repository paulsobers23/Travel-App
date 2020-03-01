// custom fetch method
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


  e.preventDefault();
  const input = document.getElementById('budget');
  const budget = Number(input.value);

  if (isNaN(budget)) {
    window.alert('Please enter a number')
  }
  if (budget < 500) {
    document.body.innerHTML += `
        <p> We apologize but the lowest amount of money to use this app is $500</p>
    `;
    location.reload(true)
  } else{
    // window.location = 'hotels.html'
  }
});

// List of location ids for the hotels in every state
let tripAdvisorHotelID = [ 'New York - 60763 ',
              'Alaska - 28923',
              'Arkansas - 28925',
              'Arizona - 31352',
              'American Samoa - 294490',
              'Alabama - 28922',
              'California - 28926 ',
              'Colorado - 28927',
              'Connecticut - 28928 ',
              'District of Columbia - 28969',
              'Delaware - 28929',
              'Florida - 28930',
              'Georgia - 28931',
              'Guam - 60668',
              'Hawaii - 28932',
              'Iowa - 28936',
              'Idaho - 28933',
              'Illinois- 28934',
              'Indiana- 28935',
              'Kansas - 28937',
              'Kentucky - 28938',
              'Louisiana - 28939',
              'Massachusetts - 28942',
              'Maryland - 28941',
              'Maine - 28940',
              'Michigan - 28943',
              'Minnesota - 28944',
              'Missouri - 28946',
              'Mississippi - 28945',
              'Montana - 28947',
              'North Carolina - 1438847',
              'North Dakota - 28955',
              'Nebraska - 28948',
              'New Hampshire - 186297',
              'New Jersey - 28951',
              'New Mexico - 28952',
              'Nevada - 28949',
              'Ohio - 28956',
              'Oklahoma - 28957',
              'Oregon - 28958',
              'Pennsylvania - 28959',
              'Puerto Rico - 147319',
              'Rhode Island - 28960',
              'South Carolina - 659476',
              'South Dakota - 28962',
              'Tennessee - 28963',
              'Texas - 28964 ',
              'Utah - 28965',
              'Virginia - 28967 ',
              'Virgin Islands - 147400',
              'Vermont - 28966',
              'Washington - 28968',
              'isconsin - 28972',
              'West Virginia - 28971',
              'Wyoming - 28973'
              
]