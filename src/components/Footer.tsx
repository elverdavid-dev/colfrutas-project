import { RiFacebookFill, RiPhoneLine, RiInstagramLine } from "react-icons/ri/index.js";

const Footer = () => {
 return (
  <>
   <footer className="bg-slate-800 lg:h-52 h-72 w-full text-white flex flex-col-reverse lg:flex-row lg:justify-evenly justify-center items-center gap-9">
    <span className="font-light"> &copy; copyright 2023 Colfrutas S.A.S </span>
    <div className="flex justify-center flex-col items-center gap-y-1">
     <h2 className="text-3xl font-bold">C.I COLFRUTAS S.A.S</h2>
     <h3 className="text-center font-nunito">DG 99 106C-32 Barrio los almendros</h3>
     <div className="flex items-center gap-x-5 lg:text-xl justify-center font-nunito">
      <h2 className="Footer-item">
       <RiPhoneLine />
       (57) 3197365616
      </h2>
      <h2 className="Footer-item">
       <RiPhoneLine /> (034) 8283342
      </h2>
     </div>
    </div>

    <div className="flex items-center justify-center flex-col gap-y-3 ">
     <h2 className="text-2xl font-bold">SIGUENOS</h2>
     <div className="flex lg:flex-col gap-3">
      <a
       href="https://www.facebook.com/colfrutasexport/"
       title="link a facebook"
       target="_blank"
       className="Redes-sociales"
      >
       <RiFacebookFill />
      </a>
      <a href="#" title="link a instagram" target="_blank" className="Redes-sociales">
       <RiInstagramLine />
      </a>
     </div>
    </div>
   </footer>
   <h2 className="bg-slate-800 text-base capitalize lg:text-start text-center  ">
    desarrollado por{" "}
    <a href="https://www.elverportafolio.online" target="_blank" className="text-white font-nunito hover:text-sky-500 duration-500">
     elver david peñate
    </a>
   </h2>
  </>
 );
};

export default Footer;
