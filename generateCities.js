// //these two function use the API to find the flights and their prices
// const getTrip = async (origin,destination,departureDate, returnDate,budgetPrice) =>{
//   const departureQuotes = await getFlights(origin, destination, departureDate)
//   const returnQuotes = await getFlights(destination, origin, returnDate);
//   let roundTripOptions = [departureQuotes, returnQuotes]
  
//   let totalPrice = departureQuotes['Dates']['OutboundDates'][0]['Price'] + returnQuotes['Dates']
//   ['OutboundDates'][0]['Price']
//   console.log(roundTripOptions)
//   if(totalPrice < budgetPrice){
//     console.log('prices work')
//   }else if(totalPrice === undefined){
//     getIndex(origin,departureDate,returnDate,budgetPrice)
//   }
//   else{
//     console.log('prices does not work')
//   }
  
// }



// // getRoundTrip('LAX','LOND','2020-04-01','2020-04-07',500)




// // this function is going to get a random number and that number will then be the index looked for in the array


// function getRandomFlight(origin,departureDate,returnDate,budgetPrice){
//   let lengthOfUSObject = Object.keys(usAirports).length
//   let index = Math.floor(Math.random() * Math.floor(lengthOfUSObject))
//   let airportChoosenAtRandom = Object.keys(usAirports)[index]
//   return getRoundTrip(origin,airportChoosenAtRandom,departureDate,returnDate,budgetPrice)
// }

// // getIndex('LAX','2020-04-01','2020-04-07',500)