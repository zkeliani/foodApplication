function SendData(api, json) {
  
  if(api == 1) {
    apiLink = '/api/1';
  }
  else if(api == 2) {
    apiLink = '/api/2';
  }
  else if(api == 3) {
    apiLink = '/api/3'
  }
  else if(api == 4) {
    apiLink = '/api/3'
  }

  async function f() {
    const response = await fetch(apiLink, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(json)
    });
    var results = await response.json()
    if(api == 1 && results.result === undefined) {
      var text = document.getElementById("userExists");
      text.classList.remove("this-is-hidden");
    }
    else if(api == 1) {
      var text = document.getElementById("registerSuccess");
      text.classList.remove("this-is-hidden")
      console.log("account created");
    }

    if(api == 2 && results.result === undefined) {
      var text = document.getElementById("failedLogin");
      text.classList.remove("this-is-hidden");
    }
    else if(api == 2) {
      console.log("user allowed to log in");
      CloseModal();
      authInfo = {};
      authInfo.plaintext = results.ptPass;
      authInfo.encrypted = results.ePass;
      // window.localStorage.setItem("user", json.username);
      // window.localStorage.setItem("auth", authInfo);
      document.location.href = ("/authenticate/" + results.ptPass + "/" + results.ePass + "/" + json.username + "/" + results.eUser)
    }
    if(api == 3) {
      window.localStorage.setItem("pmfDB", results);
    }
    if(api == 4) {
      window.localStorage.setItem("hmfDB", results);
    }
  }
  var Redirect = () => {

  }
  f().then(Redirect);
}