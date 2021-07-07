class API{

    static fetchAllCars(){
        fetch("http://localhost:3000/cars")
            .then(response => response.json())
            .then(data => {
                data.sort((a,b) => (a.year > b.year) ? -1 : ((b.year > a.year) ? 1 : 0)).forEach
                    (cars => {
                        const newCar = new Car(cars)
                        newCar.renderCar(cars)
        })
    })}

    static deleteCar(id){
        const deleteditem = document.getElementById(id)
            fetch(`http://localhost:3000/cars/${id}`,{
    
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
    
            })
            .then(response => response.json())
            .then(deleteditem.remove())
    }


    static fetchMyRecords(id){
        fetch(`http://localhost:3000/cars/${id}/records`)
            .then(response => response.json())
            .then(data => {
            data.sort((a,b) => (a.mileage > b.mileage) ? 1 : ((b.mileage > a.mileage) ? -1 : 0));
                const collectionDiv = document.querySelector(`.card[event-id="${id}"]`)
                collectionDiv.innerHTML = ""
            data.forEach(record => {  console.log(record);
                const newRecord = new Record(record)
                newRecord.renderRecord(record)
        })
    })}

    static updateCar(editCarForm, id){
        let updatedColor = editCarForm.querySelector(".input-car-color").value
            console.log(updatedColor)
            const bodyObj = {
                color: updatedColor, 
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
                })
        location.reload()
    }

    static addRecord(addRecordForm, id){
        let updatedService = addRecordForm.querySelector(".input-car-service").value
        console.log(updatedService)
        let updatedMileage = addRecordForm.querySelector(".input-car-mileage").value
        console.log(updatedMileage)
            const bodyObj = {
                "service": updatedService,
                "mileage": updatedMileage,
                "car_id": id
            }
            fetch(`http://localhost:3000/cars/${id}/records`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyObj),
            })
                .then(response => response.json())
                .then(theThingWePosted => console.log("Info:", theThingWePosted))
        location.reload()
    }
}