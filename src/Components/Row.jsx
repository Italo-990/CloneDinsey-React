const imageHost = "https://image.tmdb.org/t/p/original/"
import "./Row.css"
function Row({ title, results, isLarge }) { 
  return (
    <div className='row-container'>
        <h2 className={title == "Em alta" ? "header-container trending" : "header-container"}>{title}</h2>
        <div className="row-cards">
            {
                results.map(({ poster_path }, i) => {
                    return <img className={isLarge ? "img-card card-large" : "img-card"} key={i} src={`${imageHost}${poster_path}`}/>
                })
            }
        </div>
    </div>
  )
}

export default Row