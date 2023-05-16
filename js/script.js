const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

const button = document.getElementById('button')


button.onclick = () => {   
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // First Name  
  if(firstName.value == '') {
    document.getElementById('iconFirstName').classList.remove('hidden')
    document.getElementById('messageFirstName').classList.remove('hidden')
    
    document.getElementById('iconFirstName').classList.add('block')
    document.getElementById('messageFirstName').classList.add('block')
  } else {
    document.getElementById('iconFirstName').classList.add('hidden')
    document.getElementById('messageFirstName').classList.add('hidden')
    
    document.getElementById('iconFirstName').classList.remove('block')
    document.getElementById('messageFirstName').classList.remove('block')
  }

  // Last Name
  if(lastName.value == '') {
    document.getElementById('iconLastName').classList.remove('hidden')
    document.getElementById('messageLastName').classList.remove('hidden')
    
    document.getElementById('iconLastName').classList.add('block')
    document.getElementById('messageLastName').classList.add('block')
  } else {
    document.getElementById('iconLastName').classList.add('hidden')
    document.getElementById('messageLastName').classList.add('hidden')
    
    document.getElementById('iconLastName').classList.remove('block')
    document.getElementById('messageLastName').classList.remove('block')
  }

  // Email
  if(email.value == '') {
    document.getElementById('iconEmail').classList.remove('hidden')
    document.getElementById('messageEmailEmpty').classList.remove('hidden')
    
    document.getElementById('iconEmail').classList.add('block')
    document.getElementById('messageEmailEmpty').classList.add('block')
  } else {    
    if(!regex.test(email.value)) {        
      document.getElementById('messageEmailValid').classList.remove('hidden')      
      document.getElementById('messageEmailValid').classList.add('block')

      document.getElementById('messageEmailEmpty').classList.add('hidden')
      document.getElementById('messageEmailEmpty').classList.remove('block')
    } else {            
      document.getElementById('messageEmailValid').classList.add('hidden')
      document.getElementById('messageEmailValid').classList.remove('block')
                  
      document.getElementById('iconEmail').classList.add('hidden')      
      
      document.getElementById('iconEmail').classList.remove('block')      
    }
  }

  // Password
  if(password.value == '') {
    document.getElementById('iconPassword').classList.remove('hidden')
    document.getElementById('messagePassword').classList.remove('hidden')
    
    document.getElementById('iconPassword').classList.add('block')
    document.getElementById('messagePassword').classList.add('block')
  } else {
    document.getElementById('iconPassword').classList.add('hidden')
    document.getElementById('messagePassword').classList.add('hidden')
    
    document.getElementById('iconPassword').classList.remove('block')
    document.getElementById('messagePassword').classList.remove('block')
  }
}