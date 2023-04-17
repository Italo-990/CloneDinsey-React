const API_KEY = "ab0b17cbe317be4108249461adc96559"
//REQUISIÇAO DE DADOS A API
async function dados() {
  let response = []
  try{
    for(let i = 0; i < 10 ; i++){
      let randomNumber = Math.floor(Math.random() * 300) + 1
      let dados = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${randomNumber}`)).json()
      response.push(dados)
    }
    return response
  }catch(error){
    console.log(`Erro com ApiRes.jsx erro: ${error}`)
  }

}

//FILTRAR ELEMENTOS DO RESULTS
function filterElement(element,id_genre){
    let dados = element.genre_ids
    if(dados.includes(id_genre)){
      return true;
    }else{
      return false;
    }
}

//FILTAR RESULTS
function filterResults(id_genre){
  let resultsFilter = []
  results.forEach(element => {
    let elementResults = element.results

    elementResults.forEach(element =>{
        if(filterElement(element,id_genre)){
          resultsFilter.push(element)
        }
    })

  });
  return resultsFilter
}
//RESULT REQUISIÇÃO A API
const results = await dados()

//OBJECT FILMES
const filmes = [
  {
    name:"Comedy",
    title:"Comédia",
    results: filterResults(35)
},
{
    name: "Adventure",
    title:"Aventura",
    results: filterResults(12)
},
{
  name:"Drama",
  title:"Drama",
  results: filterResults(18)
},
{
  name:"Origins",
  title:"Originais",
  results: filterResults(16),
  isLarge: true
},
{
  name:"Horror",
  title:"Terror",
  results: filterResults(27)
},
{
  name:"Romance",
  title:"Romance",
  results: filterResults(10749)
},
{
  name:"Science_Fiction",
  title:"Ficção científica",
  results: filterResults(878)
},
]


export default filmes;