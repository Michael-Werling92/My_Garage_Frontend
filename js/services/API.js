class API{

    static fetchAllCars(){

        fetch("http://localhost:3000/cars")
            .then(response => response.json())
            .then(data => {
                data.sort((a,b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0)).forEach
                    (car => {console.log(car)
                        const newCar = new Car(car)
                        newCar.renderCar(car)
        })
    })}

    static deleteCar(){
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
        .then(data => {
            data.sort((a,b) => (a.mileage > b.mileage) ? 1 : ((b.mileage > a.mileage) ? -1 : 0));
                    const collectionDiv = document.querySelector("#file-cabinet")
                    collectionDiv.innerHTML = ""
            data.forEach(record => {  console.log(record);
            const newRecord = new Record(record)
            newRecord.renderRecord(record)
            window.scrollTo(0,0)
        })
    }) }}
