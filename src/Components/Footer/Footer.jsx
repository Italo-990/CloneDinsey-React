import data from "./Data.json"
import "./Footer.css"
function Footer() {
  return (
   <footer className="footer-page">
        <img className="logo-footer "src={data.logoPage}/>
        <nav>
            <ul className="ul-footer">
                {data.navData.map(({title, id})=>{
                    return (
                        <li key={id}><a href="#">{title}</a></li>
                    )
                })}
            </ul>
        </nav>
        <span className="span-footer-rigth-resever">{data.reservedRights}</span>
   </footer>
  )
}

export default Footer