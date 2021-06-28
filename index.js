document.addEventListener("click", (event)=>{ console.log("You Clicked on", event.target) }  )

document.addEventListener("DOMContentLoaded", function(){  console.log("DOM IS LISTENING")

    API.fetchAllCars()

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
      })
