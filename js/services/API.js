class API{

    static fetchAllCars(){

        fetch("http://localhost:3000/cars").then(response => response.json())
        .then(fetchedArray => fetchedArray.forEach
            (car => {console.log(car)
            const newCar = new Car(car)
            newCar.renderCar(car)
        }))
    }

    static fetchMyRecords(){

        fetch("http://localhost:3000/cars/2/records").then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
            const collectionDiv = document.querySelector("#file-cabinet")
                collectionDiv.innerHTML = ""
          fetchedArray.forEach(record => {  console.log(record);
            const newRecord = new Record(record)
            newRecord.renderRecord(record)
        })})
    }
}
