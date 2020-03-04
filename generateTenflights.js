async function getArrOfTrips(origin, departureDate, returnDate, budgetPrice){
    let arrOfTrips = []
    while(arrOfTrips.length < 5){
        let trip = await getTrips(origin, departureDate, returnDate, budgetPrice)
        if(trip){
            arrOfTrips.push(trip)
        }
    }
    return arrOfTrips
}