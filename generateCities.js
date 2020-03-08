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
    // Once the submit eventListener has fired off and they have the minimum budget of 500 all of the data(flight and hotel prices) are then retrieved through the getArrOfTrips and the inputs are used as the parameters, go to generateFlights.js for next step
    const arrOfTrips = await getArrOfTrips(origin, arrivalDate, departureDate, budget);
    // returned from getArrOfTrips is an array that holds objects that are each different trips
    addGrid(arrOfTrips, chooseFlight);
    function addGrid(arrOfData, event) {
      let str = '';
      for (let i = 0; i < arrOfData.length; i++) {
        str += `<li class="collection-item"><div class="button" id = ${i}>${topForty[arrOfTrips[i].destination]}</div></li>`;
      }


      document.body.innerHTML = `
  <div class="container"> 
<div class="row">
  <ul class="collection with-header">
  <li class="collection-header"><h4>Flights</h4></li>
  ${str}
  </ul>
   <a href ="index.html">Would You Like To Go Back ? </a>
  </div>
  </div>
  `;
      addEvent('button', event);
    }
    function addEvent(classname, callbackFunction) {
      const allButtons = document.getElementsByClassName(classname);
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', callbackFunction);
      }
    }
    function chooseFlight(e) {
      let str = '';
      const roundFlights = arrOfTrips[e.toElement.id].roundTrip;
      // getFlightPage is called in this order with o and 1 because roundFlights[0] is the departure flight and vise versa
      thirdPage();
      function thirdPage() {
        const first = getFlightPage(0);
        const second = getFlightPage(1);
        document.body.innerHTML = ` <body>
    <div class="container"> 
      <div class="row">
        <ul class="collection with-header">
          <li class="collection-header"><h4>Departure</h4></li>
            ${first}
          <li class="collection-header"><h4>Return</h4></li>
            ${second}
        </ul>
        <div class = "col s12 m7">
          ${addHotel(arrOfTrips)}
        </div>
        
      </div>
    </div>
    <a href ="index.html">Would You Like To Start Over ? </a>
  </body>`;
        function getFlightPage(i) {
          const leavingDate = roundFlights[i].Dates.OutboundDates[0].PartialDate;// Date
          // this loop is going through the quotes because for each trip there can be a selection of flights that can be taken
          for (let q = 0; q < roundFlights[i].Quotes.length; q++) {
            const isDirect = roundFlights[i].Quotes[q].Direct;// is direct?
            const price = roundFlights[i].Quotes[q].MinPrice;// price?
            const id = roundFlights[i].Quotes[q].OutboundLeg.CarrierIds[0];
            const carriers = roundFlights[i].Carriers;
            // this loop is used to find the carriers name, I must first grab the carrier id for each flight and then take that ID and go to the carriers object
            for (let c = 0; c < carriers.length; c++) {
              if (carriers[c].CarrierId === id) {
                const carrierName = carriers[c].Name;// name?
                str += `<li class="collection-item">
                  
                    <span class="price">$${price}</span>
                    <p>${carrierName} <br>
                      Is Direct:${isDirect}
                    </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">send</i></a>
                  
                </li>
                  `;
                return str;
              }
            }
          }
        }
      }
    }
  }
});

// Responsible for adding hotel info from the trip array of object into a card that is pleasant.
function addHotel(arrOfData) {
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    str += `
      <div class = "card">
        <div class = 'card-image'>
          <img src ="${arrOfData[0].hotels[i].photo.images.small.url}">
        </div>
      
        <div class = 'card-content'>
          <p>${arrOfData[0].hotels[i].name}: ${arrOfData[0].hotels[i].price}<p>
        </div>
      </div>
    `;
  }
  return str;
}
