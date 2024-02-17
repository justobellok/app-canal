import "./style/left.css"
import { FaBuffer, FaBaseballBall, FaBookReader, FaBookmark, FaGamepad} from "react-icons/fa";

const NavLeft = () => {
    return ( 
        <>
        <aside className="aside">
            <div className="title">
    <FaBuffer className="logo-side" />
        <h2>Articulos</h2>
            </div>
   <nav className="menu">
    <a href="#">
        <FaBaseballBall className="icon" />
        Deportes
    </a>
    <a href="#">
        <FaBookReader className="icon" />
        Libros
    </a>
    <a href="#">
        <FaGamepad className="icon" />
        Entretenimiento
    </a>
   
    <a href="#">
    <FaBookmark className="icon" />
    Favoritos
    </a>
   </nav>
        </aside>
        </>
     );
}
 
export default NavLeft;