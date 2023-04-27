import ProviderTheme from "@components/Provider";
import MaterialTailwind from "@material-tailwind/react/index.js";
import { AiOutlineInfoCircle } from "react-icons/ai/index.js";
import { useState } from "react";
const { Alert } = MaterialTailwind;
const AlertMessage = () => {
 const [show, setShow] = useState(true);
 return (
  <ProviderTheme>
   <Alert
    className="font-nunito py-5"
    variant="gradient"
    show={show}
    dismissible={{ onClose: () => setShow(false) }}
   >
    <div className="flex items-cente justify-start gap-x-2">
     <AiOutlineInfoCircle className="text-3xl" />
     <span className="flex-1">
      esta pagina no es oficial de colfrutas, La página oficial de Colfrutas es
      <a
       href="https://colfrutas.com.co"
       target="_blank"
       title="pagina oficial de colfrutas"
       className=" text-lg underline pl-2"
      >
       colfrutas.com.co
      </a>
     </span>
    </div>
   </Alert>
  </ProviderTheme>
 );
};

export default AlertMessage;
