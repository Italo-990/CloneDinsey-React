import Row from "./Components/Row"
import filmes from  "./ApiRes"
import Banner from "./Components/Banner"
import "./App.css"

const randomNumber = Math.floor(Math.random() * 10 ) + 1
function App() {
  return (
      <>
        //BANNER
        <Banner results={filmes[0].results[randomNumber]}/>


        //ROW-CARDS
        {
          filmes.map(({ name, title, results, isLarge }) =>{
            return <Row 
                    key={name}
                    title={title}
                    results={results}
                    isLarge = {isLarge}
                   />
          })
        }

      </>
  )
}

export default App
