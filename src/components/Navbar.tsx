import { useState } from "react";
import { RiWhatsappLine, RiMenuFill, RiCloseFill } from "react-icons/ri/index.js";

const Navbar = () => {
 const [open, setOpen] = useState(false);
 return (
  <>
   <nav className="Navbar-content">
    <div className="flex items-center justify-between px-4 lg:px-0">
        <a href="/">
     <img src="/logo.png" width="100" height="100" alt="logo colfrutas" />
        </a>
     <div className="cursor-pointer" onClick={() => setOpen(!open)}>
      {open ? <RiCloseFill className="Icons-navbar" /> : <RiMenuFill className="Icons-navbar" />}
     </div>
    </div>
    <div className={`Navbar-content-item ${open ? "top-20" : "top-[-420px] "}`}>
     <ul
      className={`Navbar-list ${
       open ? "top-20 opacity-100 " : "top-[-420px] lg:opacity-100 opacity-0"
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
      <li className="Navbar-item">contacto</li>
     </ul>

     <button className="Button">
      <RiWhatsappLine /> Whatsapp
     </button>
    </div>
   </nav>
  </>
 );
};

export default Navbar;
