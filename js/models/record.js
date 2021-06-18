console.log ("Record.JS loaded")

class Record{

    static all = []


    constructor({id, mileage, service, car_id}){

            this.id = id,
        this.mileage = mileage,
        this.service = service,
        this.car_id = car_id,

        Prop.all.push(this)
    }
}