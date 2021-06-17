document.addEventListener("click", (event)=>{ console.log("You Clicked on", event.target) }  )

document.addEventListener("DOMContentLoaded", function(){  console.log("DOM IS LISTENING")

    API.fetchAllCars()

    const newToyForm = document.querySelector(".add-car-form")
        newToyForm.addEventListener("submit", event =>{ event.preventDefault(); 
          const year = event.target.year.value
          const make = event.target.make.value
          const model = event.target.model.value
          const color = event.target.color.value
          const image = event.target.image.value
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
                      "image": image
                }
              ,)})
              .then(response => response.json())
              .then(theThingWePosted => console.log("Info:", theThingWePosted))
      })
})