import { Outlet, Link } from "react-router-dom";
import "./style/layout.css"
import {IoMdNotificationsOutline} from "react-icons/io"
import { CiUser } from "react-icons/ci"

const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <span>
            <Link to="/" className="logo">Thunder TV</Link>
        </span>
        <ul className="list">

          <li>
            <Link to="/">Comienzo</Link>
          </li>
          <li>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li>
            <Link to="/novedades">Novedades</Link>
          </li>
          <li>
            <Link to="/canal">Canales</Link>
          </li>

        </ul>
        <section className="info-user">

          <Link to="/usuario">
            <CiUser />
          </Link>

          <Link to="/notificaciones">
          <IoMdNotificationsOutline />
          </Link>

        </section>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;