import data from "./Data.json"
import "./NavBar.css"
function NavBar() {
  return (
    <header className="header-page">
      <img src={data.logoPage} className="logoPage"/>
      <nav className="nav-header">
        <ul className="nav-header-ul">
          {data.navData.map( ( { content, icon } )=>{
            return (
              <li key={content} className="nav-li-header"><img className="nav-icon" src={icon}/>{content}</li>
            )
          })}
        </ul>
      </nav>
      <div className="header-right-content">
        <span>{data.navRigth.name}</span>
        <img src={data.navRigth.icon}></img>
      </div>
    </header>
  )
}

export default NavBar