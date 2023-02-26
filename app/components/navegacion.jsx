import { Link, useLocation } from "@remix-run/react";
import carrito from "../../public/img/carrito.png"

function Navegacion() {
  const location = useLocation()
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" && "active"}>
        Inicio
      </Link>

      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" && "active"}
      >
        Nosotros
      </Link>

      <Link
        to="/guitarras"
        className={location.pathname === "/guitarras" && "active"}
      >
        Tienda
      </Link>

      <Link to="/posts" className={location.pathname === "/posts" && "active"}>
        Blog
      </Link>

      <Link to="/carrito">
        <img src={carrito} alt="Imagen carrito" />
      </Link>
    </nav>
  );
}

export default Navegacion;
