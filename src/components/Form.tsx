import { TextInput, Textarea, Label } from "flowbite-react";
import { FiAlertCircle } from "react-icons/fi/index.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { Data } from "Interfaces/SubmitData";
const Form = () => {
 const {
  register,
  reset,
  handleSubmit,
  formState: { errors },
 } = useForm<Data>();
 const submitData: SubmitHandler<Data> = (data: Data) => {
  try {
   reset();
   console.log(data);
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <>
   <h2 className="text-center font-lora text-2xl text-emerald-600 mb-16">
    O atra vez de este formulario
   </h2>
   <h3 className="text-center font-rubik pb-1 text-slate-800 mb-5">
    este formulario no funciona aun.
   </h3>
   <form
    className="lg:w-[400px] w-full space-y-5  mx-auto mb-40 "
    onSubmit={handleSubmit(submitData)}
   >
    <section>
     <Label htmlFor="name" value="Nombre" />
     <TextInput
      type="text"
      placeholder="Ingresa tu nombre"
      {...register("name", { required: true })}
      color={errors.name ? "failure" : ""}
     />
      {errors.name && (
     <small className="text-red-500 flex items-center gap-x-2">
      <FiAlertCircle/>
      {errors.name.type === "required" && "Este campo es requerido!"}
     </small>
    )}
    </section>
    <section>
     <Label htmlFor="email" value="Correo" />
     <TextInput
      type="email"
      placeholder="Ingresa tu correo"
      {...register("email", {
       required: true,
       pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      })}
      color={errors.email ? "failure" : ""}
     />
         {errors.email && (
     <small className="text-red-500 flex items-center gap-x-2">
      <FiAlertCircle/>
      {errors.email.type === "required" && "Este campo es requerido!"}
      {errors.email.type === "pattern" && "Escribe un correo valido!"} 
     </small>
    )}
    </section>
    <section>
     <Label htmlFor="message" value="Mensaje" />
     <Textarea
      {...register("message", { required: true })}
      className="resize-none"
      rows={4}
      name="message"
      placeholder="Escribe tu mensaje aqui..."
      color={errors.message ? "failure" : ""}
     />
       {errors.message && (
     <small className="text-red-500 flex items-center gap-x-2">
      <FiAlertCircle/>
      {errors.message.type === "required" && "Este campo es requerido!"}
     </small>
    )}
    </section>
    <button title="enviar formulario" type="submit" className="Button w-full">
     enviar
    </button>
   </form>
  </>
 );
};

export default Form;
