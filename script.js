const api_URL = "https://api.chucknorris.io/jokes/random";

async function getMessages() {
  const response = await fetch(api_URL);
  const data = await response.json();
  return data.value; 
}

async function lisa_lehele(nali){
    const p = document.createElement('p');
    p.innerHTML = `${nali}`;
    const blueDiv = document.querySelector('.blue');
    blueDiv.appendChild(p);
}


getMessages().then((joke) => {
    lisa_lehele(joke)
});

