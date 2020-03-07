const indexForm = document.getElementById('myForm');
indexForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input1 = document.getElementById('budget');
  const budget = Number(input1.value);

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


    document.body.innerHTML = `
    <div class = 'container'>
      <div class="row">
        <div class="col s12 m7">
          ${addHotel(trip)}
        </div>
        </div>
    </div>
    
    `
  }
});

// Responsible for adding hotel info from the trip array of object into a card that is pleasant.
function addHotel(arrOfData) {
  let str = '';
  for (let i = 0; i < 10; i+= 1) {
    str += `
    <div class="card">
      <div class = 'card-image'>
        <img src ="${arrOfData[0].hotels[i].photo.images.small.url}">
      </div>
      
      <div class = 'card-content'>
        <p>${arrOfData[0].hotels[i].name}:${arrOfData[0].hotels[i].price}<p>
      </div>
      
    </div>
    `;
  }
  return str;
}
