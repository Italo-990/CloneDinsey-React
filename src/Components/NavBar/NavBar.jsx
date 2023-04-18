import data from "./Data.json"
import "./NavBar.css"
function NavBar() {
  return (
    <header className="header-page flex-item">
      <img src={data.logoPage} className="logoPage"/>
      <nav className="nav-header">
        <ul className="nav-header-ul flex-item flex-itens-center">
          {data.navData.map( ( { content, icon } )=>{
            return (
              <li key={content} className="nav-li-header flex-item flex-itens-center">
                <img className="nav-icon" src={icon}/>
                <span className="span-nav">{content}</span>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="header-right-content flex-item flex-item-center">
        <span className="header-right-span">{data.navRigth.name}</span>
        <img className="header-right-img" src={data.navRigth.icon}></img>
      </div>
    </header>
  )
}

export default NavBar