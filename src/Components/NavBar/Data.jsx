import logoDisney from "../../icons/logoDisney.svg"
import homeIcon from "../../icons/homeIcon.svg"
import searchIcon from "../../icons/searchIcon.svg"
import myListIcon from "../../icons/myListIcon.svg"
import originalsIcon from "../../icons/originalsIcon.svg"
import moviesIcon from "../../icons/moviesIcon.svg"
import seriesIcon from "../../icons/seriesIcon.svg"
import IconRightNav from "../../icons/disneyIconRigthNav.png"

const data = {
    "logoPage": logoDisney,
    "navData":[
        {
            "content":"INÍCIO",
            "icon": homeIcon
        },
        {
            "content":"PESQUISA",
            "icon": searchIcon
        },
        {
            "content":"MINHA LISTA",
            "icon": myListIcon
        },
        {
            "content":"ORIGINAIS",
            "icon":originalsIcon
        },
        {
            "content":"FILMES",
            "icon": moviesIcon
        },
        {
            "content":"SÉRIES",
            "icon": seriesIcon
        }
    ],

    "navRigth":{
        "name": "Italo",
        "icon": IconRightNav
    }
    
}

export default data