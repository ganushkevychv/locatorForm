  
let obj = {};
fetch("/form.json")
  .then(response => response.json())
  .then(json => (obj = json));

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let form = document.getElementById("form").value;
    getResultDiv.innerHTML = Object.entries(obj[form.toLowerCase()]);
  }