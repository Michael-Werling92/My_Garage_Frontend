document.addEventListener("click", (event)=>{ console.log("You Clicked on", event.target) }  )

document.addEventListener("DOMContentLoaded", function(){  console.log("DOM IS LISTENING")

const colorForm = document.querySelector('.search-box')
let filteredCars = [ ]

fetch("http://localhost:3000/cars").then(response => response.json())
        .then(fetchedArray => fetchedArray.forEach
            (cars => {console.log(cars)
            const newCar = new Car(cars)
            newCar.renderCar(cars)
            filteredCars = cars

    const newCarForm = document.querySelector(".add-car-form")
        newCarForm.addEventListener("submit", event =>{ event.preventDefault(); 
          const year = event.target.year.value
          const make = event.target.make.value
          const model = event.target.model.value
          const color = event.target.color.value
          const vin = event.target.vin.value
          
            const submit = event.target.submit
            console.log("YAYYYYYYYYYYY", submit)
            
            fetch("http://localhost:3000/cars", {
        
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
    
                      "year": year,
                      "make": make,
                      "model": model,
                      "color": color,
                      "vin": vin,
                }
              ,)})
              .then(response => response.json())
              .then(theThingWePosted => console.log("Info:", theThingWePosted))
              event.target.reset()
              location.reload()
      })      
      colorForm.addEventListener('input', event => {
          event.preventDefault()
          console.log(filteredCars)
          const term = event.target.value.toLowerCase()
          let searchResults = filteredCars.filter(filteredCar => {
          return filteredCar.color.toLowerCase().includes(term)
          })
          console.log(searchResults)
        renderCar(searchResults)
      })})
      

    )})