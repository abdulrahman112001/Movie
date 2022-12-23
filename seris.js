const url='https://api.themoviedb.org/3/'
const path='tv/top_rated?'
const key = 'api_key=4d031d4b8617b38ed40ac537f494a808'
const pathimg ='https://image.tmdb.org/t/p/w500/'

const ApiUrl = url + path +key 
console.log(ApiUrl)
const mainseris = document.getElementById("seris")

seris(ApiUrl)

function seris(url){
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results)
        seris(data.results)
        showSeris(data.results)
    })
}

function showSeris(data){
    mainseris.innerHTML = ''
    const div= document.createElement("div")
    div.classList.add("row")
    data.map((ser)=>{
        const {poster_path,name,vote_average}= ser
        const mainDiv = document.createElement("div")
        const childDiv = document.createElement("div")
        childDiv.classList.add("card")
        mainDiv.classList.add('col-md-3')
        childDiv.innerHTML = `
                <img src=${pathimg + poster_path}>
                 <h4 class="text-white fs-6 p-2 m-auto"> ${name} </h4>
        `
        mainDiv.appendChild(childDiv)
        div.appendChild(mainDiv)
        mainseris.appendChild(div)
    })

}