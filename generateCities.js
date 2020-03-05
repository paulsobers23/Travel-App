const indexForm = document.getElementById('myForm');	
indexForm.addEventListener('submit', async(e) => {	
  e.preventDefault();	
  const input1 = document.getElementById('budget');	
  const budget = Number(input1.value);	
  const label = document.getElementsByTagName('label')

  const origin = document.getElementById('city').value
  const departureDate = document.getElementById('departure').value;	
  const arrivalDate = document.getElementById('arrival').value;	
  if (Number.isNaN(budget)) {	
    window.alert('Please enter a number')	
  }	
  if (budget < 500) {	
    window.alert('We apologize but to use this app correctly please enter $500 or greater')	
  }	
  if (budget >= 500){
    let trip = await getArrOfTrips(origin,arrivalDate,departureDate,budget)
    

    document.body.innerHTML = `<body>
      <div class="container">
      <div class="row">
      ${addHotel(trip)}
      </div>
    </body>
      
    `
    
    
  }
});

function addHotel(arrOfData){
  let str = ''
  for(let i =0; i< 10; i++){
    str +=  `<div class="col s1">${arrOfData[1]['hotels'][i]['name']}:${arrOfData[1]['hotels'][i]['price']}</div>`
  }
  return str
}