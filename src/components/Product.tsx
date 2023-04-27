import { InfoProduct } from "@utils/file";
const Product = () => {
 return (
  <>
   <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 mb-32 gap-y-7 ">
    {InfoProduct.map(
     (
      {
       producto,
       Descripcion,
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
      <div
       key={i}
       className="bg-white border shadow-md shadow-emerald-600/20 rounded-lg py-5 relative"
      >
       <h2 className="text-center font-lora text-2xl text-slate-800 py-3">{producto} </h2>
       <img
        src={image}
        alt={producto}
        width={450}
        height={450}
        className="col-span-2 lg:h-[320px] mx-auto w-full"
       />
       <div className="mx-2 font-nunito py-4">
        <h2 className="text-slate-700">
         <span className="font-lora text-black">Nombre cientifico: </span>
         {nombre_cientifico}
        </h2>
        <h2 className="text-slate-700">
         <span className="font-lora text-black">familia:</span>
         {familia}
        </h2>
        <h2 className="text-slate-700">
         <span className="font-lora text-black">Variedad: </span>
         {variedad}
        </h2>
        <h2 className="text-slate-700">
         <span className="font-lora text-black">Lugar de produccion: </span>
         {lugar_de_produccion}
        </h2>
        <h2 className="text-slate-700">
         <span className="font-lora text-black">Tipo de empaque: </span> {tipos_de_empaque}{" "}
        </h2>
        <h2 className="text-slate-700">
         <span className="font-lora text-black">Disponibilidad: </span> {disponibilidad}{" "}
        </h2>
        <h2 className="text-slate-700">
         <span className="font-lora text-black">Descripcion: </span> {Descripcion}{" "}
        </h2>
       </div>
      </div>
     )
    )}
   </div>
  </>
 );
};

export default Product;
