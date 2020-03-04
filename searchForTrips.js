const getTrips = async (origin, departureDate, returnDate, budgetPrice)=>{
    const destination = getRandomAirport()
    let flights = await getRoundTripFlight(origin,destination,departureDate, returnDate,budgetPrice)
    if (flights) {
        let totalPrice = flights[0]['Dates']['OutboundDates'][0]['Price'] + flights[1]['Dates']['OutboundDates'][0]['Price']
        if(totalPrice < budgetPrice){
            console.log(totalPrice)
            return flights
    }
} 
return null
} 

const getRoundTripFlight = async (origin,destination,departureDate, returnDate) =>{
    const departureQuotes = await getFlights(origin, destination, departureDate)
    const returnQuotes = await getFlights(destination, origin, returnDate);
    let roundTripOptions = [departureQuotes, returnQuotes]
    if (departureQuotes['Quotes'].length === 0 || returnQuotes['Quotes'].length === 0){
        return null
    }
    console.log(roundTripOptions)
    return roundTripOptions
    
  }

  function getRandomAirport(){
    let lengthOfTopObject = Object.keys(topForty).length
    let index = Math.floor(Math.random() * Math.floor(lengthOfTopObject))
    let airportChoosenAtRandom = Object.keys(topForty)[index]
    return airportChoosenAtRandom
  }