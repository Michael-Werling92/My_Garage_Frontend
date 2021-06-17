document.addEventListener("click", (event)=>{ console.log("You Clicked on", event.target) }  )

document.addEventListener("DOMContentLoaded", function(){  console.log("DOM IS LISTENING")

    API.fetchAllCars()


})