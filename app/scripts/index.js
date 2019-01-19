'use strict'

const appId = 'pn-4756488289'

const postRequest = function () {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("msg").value

  // const data = {
  //   appId: appId,
  //   name: name,
  //   email: email,
  //   message:message
  // }

  var data = new FormData();
  data.append('appId', appId)
  data.append('name', name);
  data.append('email', email);
  data.append('message', message);


console.log(data)
  const xhr = new XMLHttpRequest();
  const url='https://ihs1nx5rt6.execute-api.us-east-1.amazonaws.com/crouton';
  xhr.open("POST", url,true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);

  xhr.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // Request finished. Do processing here.
          console.log(xhr.responseText)
      }
  }

  // Http.onreadystatechange=(e)=>{
  // console.log(Http.responseText)
  // }
}


document.getElementById('btn-submit-form').addEventListener('click', postRequest)
