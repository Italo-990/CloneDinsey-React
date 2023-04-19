import Data from "./Data.jsx"
import "./Footer.css"
function Footer() {
  return (
   <footer className="footer-page">
        <img className="logo-footer "src={Data.logoPage}/>
        <nav>
            <ul className="ul-footer">
                {Data.navData.map(({title, id})=>{
                    return (
                        <li key={id}><a href="#">{title}</a></li>
                    )
                })}
            </ul>
        </nav>
        <span className="span-footer-rigth-resever">{Data.reservedRights}</span>
   </footer>
  )
}

export default Footer