console.log ("Record.JS loaded")

class Record{

    static all = []


    constructor({id, mileage, service, car_id}){

        this.id = id,
        this.mileage = mileage,
        this.service = service,
        this.car_id = car_id,

        Record.all.push(this)
    }

    makeACard =()=>{console.log(this)
        
        return `
            <h3>Service Performed: ${this.service} </h3>
            Mileage: ${this.mileage}
            `
    }

    renderRecord=(record)=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
          cardDiv.setAttribute("data-id", record.id)
            cardDiv.id = record.id
            cardDiv.innerHTML = this.makeACard()
        const collectionDiv = document.querySelector(`.card[event-id="${record.car_id}"]`)
        collectionDiv.append(cardDiv)    
    }
}