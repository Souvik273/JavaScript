let container = document.querySelector('.container')

let searchBtn = document.querySelector('#searchBtn')

searchBtn.addEventListener('click',()=>{
    let searchVal = document.querySelector('#search').value
   console.log(searchVal)
    fetchData(searchVal)
})

const api = `https://omdbapi.com/?i=tt3896198&apikey=ede19a2d`

const fetchData = async(searchVal)=>{
    try{
        let res = await fetch(`${api}&s=${searchVal}`)
        let data = await res.json()
        displayData(data.Search)
        console.log(data.Search)
    }
    catch(c){
        console.log(c)
    }
}

function displayData(data){
    let DocumentFragment= document.createElement('div')
    data.forEach(element => {
        
        let img = document.createElement('img')
        img.src=element.Poster

        let title = document.createElement('p')
        title.textContent = element.Title

        let year = document.createElement('p')
        year.textContent = element.Year

        let imdbID = document.createElement('p')
        imdbID.textContent = element.imdbID

        DocumentFragment.append(img,title,year,imdbID)
        
    });
    container.append(DocumentFragment)
    
}