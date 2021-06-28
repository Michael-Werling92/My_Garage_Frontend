class API{

    static fetchAllCars(){

        fetch("http://localhost:3000/cars").then(response => response.json())
        .then(fetchedArray => fetchedArray.forEach
            (car => {console.log(car)
            const newCar = new Car(car)
            newCar.renderCar(car)
        }))
    }

    static deleteCar(id){
    const deleteditem = document.getElementById(id)
            
            
        fetch(`http://localhost:3000/cars/${id}`, {
                
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
                
        })
        .then(response => response.json())
        .then(deleteditem.remove())
    }

    static fetchMyRecords(id){

        fetch(`http://localhost:3000/cars/${id}/records`).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
            const collectionDiv = document.querySelector("#file-cabinet")
                collectionDiv.innerHTML = ""
          fetchedArray.forEach(record => {  console.log(record);
            const newRecord = new Record(record)
            newRecord.renderRecord(record)
            window.scrollTo(0,0)
        })})
    }
}
