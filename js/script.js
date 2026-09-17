
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const query = document.getElementById("inputEl").value
    console.log(query)
    searchMovie(query)

})


async function searchMovie(query){

    try {

        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=30cf1013`);

        const data = await response.json();
        console.log(data)

        // devuelve array con los titulos
         const titlesArray = data.Search.map(function(titles){

                return titles.imdbID

            })
            console.log(titlesArray)

        const parameter = await Promise.all(titlesArray.map(async function(data){

            const parameter2 = await fetch(`https://www.omdbapi.com/?i=${data}&apikey=30cf1013`);
            const titles = await parameter2.json();

            return titles
        })
    )

        console.log(parameter)
        
    

    } catch (error){
        console.log("Error buscando películas", error)
    }
    
}




