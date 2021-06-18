console.log ("Record.JS loaded")

class Prop{

    static all = []


    constructor({id, name, image, currently_with, actorID}){

            this.id = id,
        this.name = name,
        this.image = image,
        this.currently_with = currently_with,
        this.actorID = actorID

        Prop.all.push(this)

    }
}