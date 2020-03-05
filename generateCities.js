const indexForm = document.getElementById('myForm');
indexForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input1 = document.getElementById('budget');
  const budget = Number(input1.value);
  const label = document.getElementsByTagName('label');

  const origin = document.getElementById('city').value;
  const departureDate = document.getElementById('departure').value;
  const arrivalDate = document.getElementById('arrival').value;
  if (Number.isNaN(budget)) {
    window.alert('Please enter a number');
  }
  if (budget < 500) {
    window.alert('We apologize but to use this app correctly please enter $500 or greater');
  }
  if (budget >= 500) {
    const trip = await getArrOfTrips(origin, arrivalDate, departureDate, budget);

    document.body.innerHTML = `<body>
      <div class="container">
      <div class="row">
      ${showCity(trip)}
      ${addFlights(trip)}
      ${addHotel(trip)}
      </div>
    </body>
    `;
  }
});

function addHotel(arrOfData) {
  let str = '';
  for (let i = 0; i < 10; i+= 1) {
    str += `<div class="col s1">${arrOfData[0].hotels[i].name}:${arrOfData[0].hotels[i].price}</div>`;
  }
  return str;
}

function addFlights(arrOfData) {
  let str = '';
  for (let i = 0; i < 1; i += 1) {
    str += `<div class ='col s1'>
    ${arrOfData[0].origin} to ${arrOfData[0].destination} for ${arrOfData[0].lowestPrice}
    </div>
    `;
  }
  return str;
}

function showCity(arrOfData) {
  let str = '';
  for (let i = 0; i < 1; i++) {
    str += `<div class ='col s1'>
    Traveling to ${arrOfData[0].roundTrip[0].Places[1].CityName} from ${arrOfData[0].roundTrip[0].Places[0].CityName}
    </div>    
    `;
  }
  return str;
}
