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
            <img src="https://cdn3.iconfinder.com/data/icons/car-icons-front-views/480/Generic_Car_Front_View-512.png" class="car-avatar" /><br></br>
            <h3>Color: ${this.color}<br></br> VIN: ${this.vin}</h3>
            <button data-id="${this.id}" class="maintenance-btn"> VIEW MAINTENANCE </button>
            <button data-id="${this.id}" class="delete-btn"> DELETE CAR FROM GARAGE </button>
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
    }
        
        
} 