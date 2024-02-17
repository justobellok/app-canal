import error from "./img/error.jpg"
import "./style/error.css"
import {FaFaceFrown} from "react-icons/fa6"

const NoPage = () => {
    return ( 
        <>
        <div className="image">
        <h3 className="text-error">Ocurrio un error al aceder a la pagina X</h3>
        <FaFaceFrown className="icon-error" />
        <img src={error} alt="" />
        </div>
        </>
     );
}
 
export default NoPage;