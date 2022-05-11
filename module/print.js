const mostrarPersonajes= (data,container) =>{
    data.results.forEach (m =>{  
const {name,image,location,origin}= m
container.classList.add("tarjeta") 
    container.innerHTML += `
    <div class="personaje">
        <img src="${image}" alt="">
        <div class="descripcion">
            <h1>${name}</h1>
            <h2>categoria</h2>
            <h3>location: ${location.name}</h3>
            <h3>visto por primera vez: ${origin.name}</h3>
        </div>
    </div>
` 
})
 }
 export default mostrarPersonajes
