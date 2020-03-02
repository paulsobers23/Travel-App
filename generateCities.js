//these two function use the API to find the flights and their prices
const roundTrip = async (origin,destination,arrival,returnDate) =>{
    const data = await requestMethod('GET',`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/${arrival}`);

  const results = await data.json();
  console.log(results);
  let OneDestination = origin
  let oneOrigin = destination
  let oneArrival = returnDate
  oneWay(oneOrigin,OneDestination,oneArrival)
}

const oneWay = async (oneOrigin,oneDestination,oneArrival) =>{
  const data = await requestMethod('GET',`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/${oneOrigin}-sky/${oneDestination}-sky/${oneArrival}`);

const results = await data.json();
console.log(results);
}

roundTrip('LO','JFK','2020-04-01','2020-04-07')



// logic to loop through object 
// add an eventlistener to all of the cotinental options and that will then determine which object we will be using

// function loopThroughObject(){
//   for(let continent in allContinents){
//     allContinents.continent.
//   }
// }