import Data from "./Data.jsx"
import "./NavBar.css"

function handleWidth(element,width){
  element.style.width = `${width}px`
}
function hoverEffect({target}){
  if(target.classList.contains('divHover')) return
  const documentWidth = target.clientWidth
  const divHover = target.children[0]
  handleWidth(divHover,documentWidth)
}
function outEffect({target}){
  if(target.classList.contains('divHover')) return
  const divHover = target.children[0]
  handleWidth(divHover,0)
}

function NavBar() {

  return (
    <header className="header-page flex-item">
      <img src={Data.logoPage} className="logoPage"/>
      <nav className="nav-header">
        <ul className="nav-header-ul flex-item flex-itens-center">
          {Data.navData.map( ( { content, icon } )=>{
            return (
              <li key={content} className="nav-li-header flex-item flex-itens-center">
                <img className="nav-icon" src={icon}/>
                <a className="span-nav" href="#" onMouseOver={hoverEffect} onMouseOut={outEffect}>
                  {content}
                  <div className="divHover"></div>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="header-right-content flex-item flex-item-center">
        <span className="header-right-span">{Data.navRigth.name}</span>
        <img className="header-right-img" src={Data.navRigth.icon}></img>
      </div>
    </header>
  )
}

export default NavBar