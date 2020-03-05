const getTrips = async (origin, departureDate, returnDate, budgetPrice)=>{
    const destination = getRandomAirport()
    let flights = await getRoundTripFlight(origin,destination,departureDate, returnDate,budgetPrice)
    if (flights) {
        let roundTripPrice = flights[0]['Dates']['OutboundDates'][0]['Price'] + flights[1]['Dates']['OutboundDates'][0]['Price']
        if(roundTripPrice < budgetPrice){
            // console.log(roundTripPrice, topForty[origin], topForty[destination])
           let arrHotels = await getCityByLatLng(topForty[destination])
           let hotelPriceStr = await getMinPrice(arrHotels)
           let hotelPriceNum = parseInt(hotelPriceStr.substring(1))
            console.log(`lowest flight price:${roundTripPrice} lowest hotel price:${hotelPriceNum}`)
           let totalPrice = hotelPriceNum + roundTripPrice
           if(totalPrice <= budgetPrice){
               return {hotels:arrHotels,roundTrip:flights,lowestPrice:totalPrice,origin:origin,destination:destination}
           }else{
               return null
           }
    }
  }
  return null;
};


const getRoundTripFlight = async (origin,destination,departureDate, returnDate) =>{
  
  const departureQuotes = await getFlights(origin, destination, departureDate)
  const returnQuotes = await getFlights(destination, origin, returnDate);
  let roundTripOptions = [departureQuotes, returnQuotes]
  if(departureQuotes['Quotes'].length === 0 || returnQuotes['Quotes'].length === 0){
    
      return null
    }
    // console.log(roundTripOptions)
    return roundTripOptions

}
 
function getRandomAirport() {
  const lengthOfTopObject = Object.keys(topForty).length;
  const index = Math.floor(Math.random() * Math.floor(lengthOfTopObject));
  const airportChoosenAtRandom = Object.keys(topForty)[index];
  return airportChoosenAtRandom;
}
