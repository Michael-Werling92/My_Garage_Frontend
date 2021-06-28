console.log("Cars.JS loaded")

class Car{

    static all = []

    constructor({id, year, make, model, color, image, vin}){
            this.id = id
            this.year = year,
            this.make = make,
            this.model = model,
            this.color = color,
            this.image = image,
            this.vin = vin,
    
            Car.all.push(this)
        }   


    makeACard =()=>{console.log(this)
        
        return `
            <h2 id="car.id" data-id="${this.id}">${this.year} ${this.make} ${this.model}</h2>
            <img src="${this.image}" class="car-avatar" /><br></br>
            <h3>Color: ${this.color}<br></br> VIN: ${this.vin}</h3>
            <button data-id="${this.id}" class="edit-btn"> EDIT CAR INFO </button>
            <button data-id="${this.id}" class="maintenance-btn"> VIEW MAINTENANCE </button>
            <button data-id="${this.id}" class="delete-btn"> DELETE CAR FROM GARAGE </button>
            <div class="card" event-id="${this.id}"></div>
            `
    }

    renderCar =(car)=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
          cardDiv.setAttribute("data-id", car.id)
            cardDiv.id = car.id
            cardDiv.innerHTML = this.makeACard()
        const collectionDiv = document.querySelector("#garage")
        collectionDiv.append(cardDiv)
        collectionDiv.addEventListener("click", event =>{ event.preventDefault(); 
          if(event.target.matches(".delete-btn")){
            const id = event.target.dataset.id
            API.deleteCar(id)
          }
          if(event.target.matches(".maintenance-btn")){
            const id = event.target.dataset.id
            API.fetchMyRecords(id)
          }
          if(event.target.matches(".edit-btn")){
            const id = event.target.dataset.id
            const cardEditing = document.querySelector(`.card[event-id="${id}"]`)
            console.log(cardEditing)
            const editCarForm = document.createElement("form")
            editCarForm.innerHTML =`
                    <br><br>
                    <h2>Edit This Car:</h2>
                        <form class="name-change-form">
                        <br>
                        <button class="close-button">✖️CLOSE</button>
                        <br>

                          <br />
                        <h4>New Color:</h4>
                        <input
                        type="text"
                        name="color"
                        value=""
                        placeholder=""
                        class="input-car-color"
                          />


                        <h4>Image URL:</h4>
                        <input
                        type="text"
                        name="image"
                        value=""
                        placeholder=""
                        class="input-text-image"
                        />        
                          <br />
                        <input
                        type="submit"
                        name="submit"
                        value="Update Car Information"
                        class="submit-button"
                        />
                        </form>
                        <br><br><br><br>
                        `
                    cardEditing.append(editCarForm)

            const closeButton = editCarForm.querySelector(".close-button")
                closeButton.addEventListener("click", (event)=>{
                        editCarForm.remove()
                        })

            editCarForm.addEventListener("click", (event)=>{  event.preventDefault();
                        if(event.target.matches(".submit-button")){

                          let updatedColor = editCarForm.querySelector(".input-car-color").value
                              console.log(updatedColor)
                          let updatedImage = editCarForm.querySelector(".input-text-image").value
                              console.log(updatedImage)

                          const bodyObj = {

                            color: updatedColor,
                            image: updatedImage 

                          }
                          fetch(`http://localhost:3000/cars/${id}`,{
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(bodyObj),
                          })
                          .then(r => r.json())
                          .then(updatedCar => {  
                              console.log("", updatedCar)

                              cardEditing.color = updatedColor.color
                              cardEditing.image = updatedImage.image
                          })
                        }


                    })
            }
        }
    )}}