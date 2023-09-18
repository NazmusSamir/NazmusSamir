const x = document.getElementsByClassName('video')
const y = document.getElementById('movieName')
// const fetchData = require(`${__dirname}/test.js`)
const headLine = document.getElementsByClassName('headline')[0]
const button = document.getElementById('button')
const body = document.getE
const describetion = document.getElementById('describetion')
var z=x[0]
console.log(z)



// data scraping function
async function fetchData(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        var id= data.results[0].id
        var overview = data.results[0].overview
        z.src=`https://vidsrc.to/embed/movie/${id}`
        describetion.innerHTML = overview


    }
    catch(error){
        console.log(error)
    }
}


//getting movie name input 
button.addEventListener('click',()=>{ // this call back function trigers main async function 
var movieArray = y.value.split(" ")
console.log(movieArray)
// joing wordlist
var debugedName = movieArray.join('+')
console.log(debugedName)
fetchData(`https://api.themoviedb.org/3/search/movie?query=${debugedName}&api_key=f6f2a9e9b0f5eed81b4cabe35d5a9c1b`)
})


//getting movie name input 
y.addEventListener('keydown',(event)=>{ // this call back function trigers main async function
    if ('Enter'==event.key){ 
        var movieArray = y.value.split(" ")
        console.log(movieArray)
        // joing wordlist
        var debugedName = movieArray.join('+')
        console.log(debugedName)
        fetchData(`https://api.themoviedb.org/3/search/movie?query=${debugedName}&api_key=f6f2a9e9b0f5eed81b4cabe35d5a9c1b`)

                                }
    else{
        //pass
    }
                            })
    

