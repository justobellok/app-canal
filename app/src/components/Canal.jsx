import "./style/canal.css"
import {FaHeart, FaPlusCircle} from "react-icons/fa"
import { useState } from "react";

const Canal = () => {

const [like, setLike] = useState(0)

const handler = ()=>{
    setLike(like ? 0 : 1)
}

    return ( 
        <section className="container">
        <h2 className="title-canal">Canales</h2>
        <div className="content">
            <div className="principal">
         <div className="video"></div>
         <div className="info">
          <h3>Nombre del canal</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas aut qui doloribus.</p>
         </div>
     <aside className="canal-aside">
        <button onClick={handler}>
        <FaHeart/>
        {like}
        </button>
        <button>
        <FaPlusCircle />
      </button>
        
     </aside>
            </div>
        </div>
        <article>
        </article>
        
        </section>
     );
}
 
export default Canal;