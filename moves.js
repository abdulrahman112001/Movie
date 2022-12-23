



const url = 'https://api.themoviedb.org/3/'
const path = 'trending/all/day?'
const apiKey = 'api_key=4d031d4b8617b38ed40ac537f494a808'
const pathimg ='https://image.tmdb.org/t/p/w500/'
const Apiurl = url + path + apiKey

const main = document.getElementById("main")
const mainMove = document.getElementById("mainMOve")
console.log(mainMove)

getMovie(Apiurl)

function getMovie(url){
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.results)
        Moves(data.results)
    })


}

/////////////////////////////

function Moves(data){
    mainMove.innerHTML = ''
    const div= document.createElement("div")
    div.classList.add("row")
    data.map((Movie)=> {
        const { title , backdrop_path,overview}=Movie
        const mainDiv = document.createElement("div")
        const childDiv = document.createElement("div")
        childDiv.classList.add("card")
        mainDiv.classList.add('col-md-3')
        childDiv.innerHTML = `
                <img src=${pathimg + backdrop_path}>
                 <h4 class="text-white fs-6 p-2 m-auto"> ${title} </h4>
                 <div class='desc'>  
                 <p>
                 ${overview}
                 </p>
                 </div>
        `
        mainDiv.appendChild(childDiv)
        div.appendChild(mainDiv)

        mainMove.appendChild(div)
      
    } )

}