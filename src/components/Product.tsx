import { InfoProduct } from "@utils/file";
const Product = () => {
 return (
  <>
   <div className="mt-40 grid grid-cols-3">
    {InfoProduct.map(
     (
      {
       producto,
       características_generales,
       disponibilidad,
       familia,
       image,
       lugar_de_produccion,
       nombre_cientifico,
       tipos_de_empaque,
       variedad,
      },
      i
     ) => (
      <div key={i} className="">
        <img src={image} alt="" width={450} height={450}  className="col-span-2"/>
       <div>
       <h2>{producto} </h2>
       <h2>{familia} </h2>
       <h2>{lugar_de_produccion} </h2>
       <h2>{nombre_cientifico} </h2>
       <h2>{tipos_de_empaque} </h2>
       <h2>{variedad} </h2>
       <h2>{disponibilidad} </h2>
       <h2>{características_generales} </h2>
       </div>
      </div>
     )
    )}
   </div>
  </>
 );
};

export default Product;
