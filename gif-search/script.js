const input = document.getElementById('input')
const btn = document.getElementById('btn')
const form = document.getElementById('form')
const imagenes = document.querySelectorAll('img')
const api_key = 'LKvubT2K1yt9MEOi4fs87G47Oq9hqeHx'




form.addEventListener('submit', async (e)=>{

    valor = input.value
    url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${valor}&limit=5&offset=0&rating=g&lang=en`
    e.preventDefault()

    const respuesta = await fetch(url)
        const { data } = await respuesta.json()
        
        const gifs = data.map( img => (
             img.images.downsized_medium.url
        ))

        console.log(gifs)

    imagenes.forEach((imagen,i)=>{
        imagen.src = gifs[i]
    })
    
})