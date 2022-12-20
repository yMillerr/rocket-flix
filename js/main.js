async function getContent(){
    try{
        const randomNumber = Math.round(Math.random() * 100000)
        
        const {
            poster_path , 
            original_title , 
            overview 
            } = await fetch(`https://api.themoviedb.org/3/movie/${randomNumber}
            ?api_key=39dbb17eb278f3f9040dcd3465caea47&language`)
            .then(data => data.json())

            if(!poster_path){
                let poster = './assets/boracodar.png'
                let title = "Oops, today is not the day to watch a movie.Let's code! 🚀"

                return createContent(poster , title , '')
            }

        const posterImg = `https://image.tmdb.org/t/p/w500${poster_path}`

        createContent(posterImg , original_title , overview )
    } catch(error){
        console.error(error)
    }
    
}

async function createContent(poster , title , overview){
    const section = document.querySelector('main section')

    section.innerHTML = `
    <img class="poster" src="${poster}" alt="Poster ${title}">
                
    <div class="contents">
        <h3>${title}</h3>
        <p>${overview}</p>
    </div>
    `   
}

const buttonSearch = document.querySelector('.button-random')
buttonSearch.addEventListener('click' , getContent)
