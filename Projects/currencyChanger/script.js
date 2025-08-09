const baseURL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Lx19E7AeEIG3HD0p7B5kOadmT3YDTOHbOlMcp8EN"

const dropdowns = document.querySelectorAll(".dropdown select")

const btn = document.querySelector("form button")

for(let select of dropdowns){
    for(let currencyCode in countryList){
    let newOption = document.createElement("option")
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;
    if(select.name === "from" && currencyCode === "USD"){
        newOption.selected = "selected";
    }else if(select.name === "to" && currencyCode === "INR"){
        newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  })
}

const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (element) => {
    element.preventDefault();

    let amount = document.querySelector(".amount input")
    let amountValue = amount.value;

    if(amountValue === ""){
        alert("Please Enter Some Amount To Exchange");
    }else if(amountValue <= 0 ){
        alert("Please Enter Greater Than 0");
    }

})






 fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Lx19E7AeEIG3HD0p7B5kOadmT3YDTOHbOlMcp8EN",
    {
        method:"GET",
        headers: {
    "Content-Type": "application/json"
  }
    }
 )
 .then((data)=>data.json())
 .then(data=>console.log(data.data))
 .catch(error => {
    console.log("Error:", error);
  })