import { InfoCard } from "@utils/file";

const Card = () => {
 return (
  <>
   <h2 className="text-center mt-16 text-5xl font-lora text-emerald-600">¿Qué hacemos?</h2>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-5 font-nunito mt-20">
    {InfoCard.map(({ description, url }, i) => (
     <div key={i} className=" shadow-2xl shadow-primary/20 bg-white rounded-lg z-10">
      <img src={url} alt="" />
      <p className="p-3 font-nunito  text-lg text-slate-700">{description} </p>
     </div>
    ))}
   </div>
  </>
 );
};

export default Card;
