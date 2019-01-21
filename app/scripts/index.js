'use strict'

const clearForm = function() {
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('msg').value='';
}

const displayMessage = function(message) {
  document.getElementById("form-message").innerHTML = message;

  setTimeout(function(){
    document.getElementById("form-message").innerHTML = '';
}, 2000);
}

const postRequest = function () {
  const appId = 'pn-4756488289'
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("msg").value

  const data = {
    appId: appId,
    name: name,
    email: email,
    message:message
  }

  const xhr = new XMLHttpRequest();
  const url='https://ihs1nx5rt6.execute-api.us-east-1.amazonaws.com/crouton';
  xhr.open("POST", url,true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  xhr.onreadystatechange = function(e) {
      if (this.status !== 200) return displayMessage('Request failed');
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        displayMessage('Request was successfully')
        clearForm()
      }
  }
}

const scrollToFooter = function(){
  const target = document.getElementById("footer");
  target.scrollIntoView();
}


document.getElementById('btn-submit-form').addEventListener('click', postRequest)

document.getElementById('btn-discover-more').addEventListener('click', scrollToFooter )
