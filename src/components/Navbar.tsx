import { useState } from "react";
import { RiWhatsappLine, RiMenuFill, RiCloseFill } from "react-icons/ri/index.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="Navbar-content">
        <div className="flex items-center justify-between px-4 lg:px-0">
          <a href="/">
            <img src="/logo.svg" width="50" height="50" alt="logo colfrutas" />
          </a>
          <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <RiCloseFill className="Icons-navbar" /> : <RiMenuFill className="Icons-navbar" />}
          </div>
        </div>
        <div className={`Navbar-content-item ${open ? "top-16" : "top-[-820px] "}`}>
          <ul
            className={`Navbar-list ${open ? "top-16 opacity-100 " : "top-[-820px] lg:opacity-100 opacity-0"
              }`}
          >
            <li className="Navbar-item">
              <a href="/">inicio</a>
            </li>
            <li className="Navbar-item">
              <a href="/nosotros">nosotros</a>
            </li>
            <li className="Navbar-item">
              <a href="/productos">productos</a>
            </li>
            <li className="Navbar-item">
              <a href="/contacto">contacto</a>
            </li>
          </ul>

          <a
            className="Button"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=573197365616&amp;text=Me%20interesa%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Colfrutas,%20mi%20nombre%20es"
          >
            <RiWhatsappLine /> Whatsapp
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
