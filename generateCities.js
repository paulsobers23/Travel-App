const indexForm = document.getElementById('myForm');	
const section = document.getElementById('display');	
indexForm.addEventListener('submit', (e) => {	
  e.preventDefault();	
  const input1 = document.getElementById('budget');	
  const budget = Number(input1.value);	
  const label = document.getElementsByTagName('label')

  const origin = document.getElementById('city').value
  const arrivalDate = document.getElementById('departure').value;	
  const departureDate = document.getElementById('arrival').value;	
  console.log(origin)
  // console.log(destination)
  console.log(departureDate)
  console.log(arrivalDate)
  if (Number.isNaN(budget)) {	
    window.alert('Please enter a number')	
  }	
  if (budget < 500) {	
    window.alert('We apologize but to use this app correctly please enter $500 or greater')	
  }	
  if (budget >= 500){
    label[0].innerText = 'Enter your budget: $' + budget  
  }

}); 	
