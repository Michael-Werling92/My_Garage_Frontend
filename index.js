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
                      "vin": vin,
                      "image": image
                }
              ,)})
              .then(response => response.json())
              .then(theThingWePosted => console.log("Info:", theThingWePosted))
              event.target.reset()
              location.reload()
      })

      const cardsCollection = document.querySelector("#garage")
        cardsCollection.addEventListener("click", event =>{ event.preventDefault(); 
          if(event.target.matches(".delete-btn")){
            const id = event.target.dataset.id
            const deleteditem = document.getElementById(id)
            
            
            fetch(`http://localhost:3000/cars/${id}`, {
                
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
                
            })
            .then(response => response.json())
            .then(deleteditem.remove())
          }
          if(event.target.matches(".maintenance-btn")){
            const id = event.target.dataset.id
            API.fetchMyRecords(id)
          }
        })
      })
