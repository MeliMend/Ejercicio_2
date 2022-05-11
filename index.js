import mostrarPersonajes from "./module/print.js"
const url= "https://rickandmortyapi.com/api/character "
const container= document.querySelector(".contenedor")

document.addEventListener( 'DOMContentLoaded', async() => {
async function getInfo(){
    const respuesta= await fetch(url)
    const data = await respuesta.json()
       return data
    }
const personajes= await getInfo()
console.log(personajes) 
mostrarPersonajes(personajes,container)

      
})  
