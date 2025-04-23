const terrainID = document.querySelector("#terrainID")
const terrainPrice = document.querySelector("#terrainPrice")

const queryParams = new URLSearchParams(window.location.search);

for (const [key, value] of queryParams.entries()) {
  if (key === "name") {
    terrainID.innerHTML = value
  }
  else if (key === "price") {
    terrainPrice.innerHTML = value
  }
}

const formInputs = {
  name: document.querySelector('#name'),
  email: document.querySelector('#email'),
  cardNumber: document.querySelector('#card_number'),
  cardExpiration: document.querySelector('#card_expiration'),
  cardCvv: document.querySelector('#card_cvv'),
  submit: document.querySelector('#submit')
};

const currentDate = new Date()

//to validate dates
formInputs.cardExpiration.onblur = ev => {
  const value = ev.target.value
  const date = [currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear()]
  let currentNumber = ""
  let currentNumberPos = 0

  for (const pos in value) {

    const char = value[pos]

    let number = parseInt(char)

    //if it´s a number
    if (!isNaN(number)) {
      if (currentNumber.length < 2) {
        currentNumber += char
      }
      //if it´s a year
      else if (currentNumberPos === 2 && currentNumber.length < 4) {
        currentNumber += char
      }
    }

    //this is not an else-if becasue I want to include final numbers in the string
    if (char === "/" || char === "\\" || parseInt(pos) === value.length - 1) {
      if (currentNumberPos < 3) {
        date[currentNumberPos] = parseInt(currentNumber)
        currentNumberPos++
        currentNumber = ""
      }
    }
  }


  const userDate = new Date(date[2], date[1] - 1, date[0])

  const day = userDate.getDate().toString().padStart(2, '0');
  const month = (userDate.getMonth() + 1).toString().padStart(2, '0');
  const year = userDate.getFullYear();

  ev.target.value = day + "/" + month + "/" + year

}

formInputs.cardExpiration.onkeydown = ev => {

  //para evitar letras o numeros con ctrl,alt y demás
  if (ev.ctrlKey || ev.altKey || ev.metaKey) return;

  if (!isNaN(parseInt(ev.key))) {


    const value = ev.target.value
    const valueLength = ev.target.value.length

    //to prevent triple numbers
    if (valueLength < 5 && !isNaN(parseInt(value[valueLength - 1])) && !isNaN(parseInt(value[valueLength - 2]))) {
       ev.preventDefault()
    }
    else if(valueLength > 9) {
      ev.preventDefault()
    }

    //to add automatic slashes
    if (valueLength === 1 || valueLength === 4) {
      ev.target.value = value + ev.key + "/"
      ev.preventDefault()
    }

  }

  //to prevent characters
  else if(/^[a-zA-Z]$/.test(ev.key)) {
    ev.preventDefault()
  }
}


formInputs.submit.onclick = () => {
  alert("Aquí los datos deberían ser mandados a un backend.")
}