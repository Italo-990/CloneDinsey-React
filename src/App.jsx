import Row from "./Components/Row/Row"
import filmes from  "./ApiRes"
import Banner from "./Components/Banner/Banner"
import "./App.css"
import RowOriginals from "./Components/RowOriginals/RowOriginals"


function App() {
  return (
      <>
        <Banner/>
        <RowOriginals/>
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
