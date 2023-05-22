import { AiOutlineInfoCircle } from "react-icons/ai/index.js";
import { Alert } from "flowbite-react";
import { useState } from "react";
const AlertMessage = () => {
 const [closeMessage, setCloseMessage] = useState(false);

 return (
  <Alert
   className={`${closeMessage === true ? "hidden" : ""}`}
   color="info"
   withBorderAccent={true}
   onDismiss={() => {
    setCloseMessage(!closeMessage);
   }}
  >
   <div className="flex items-cente justify-start gap-x-2">
    <AiOutlineInfoCircle className="text-3xl" />
    <span className="flex-1 font-rubik text-lg">
     Es importante señalar que esta página no es oficial de la compañía, sino que fue creada para
     poner en práctica conocimientos y habilidades en el desarrollo web.Mas sobre mi en la parte
     inferior de esta pagina, La página oficial de Colfrutas es
     <a
      href="https://colfrutas.com.co"
      target="_blank"
      title="pagina oficial de colfrutas"
      className=" text-xl underline pl-2"
     >
      colfrutas.com.co
     </a>
    </span>
   </div>
  </Alert>
 );
};

export default AlertMessage;
