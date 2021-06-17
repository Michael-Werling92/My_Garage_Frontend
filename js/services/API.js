class API{

    static fetchAllCars(){

        fetch("http://localhost:3000/cars").then(response => response.json()).then(fetchedArray => fetchedArray.forEach
            (car => {console.log(car)
            const newCar = new Car(car)
            newCar.renderCar(car)
        }))
    }
}