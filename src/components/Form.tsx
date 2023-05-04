import ThemeProvider from "@components/Provider";
import MaterialTailwind from "@material-tailwind/react";
const { Input, Textarea, Button } = MaterialTailwind;
const Form = () => {
 return (
  <ThemeProvider>
   <h2 className="text-center font-lora text-2xl text-emerald-600 mb-16">
    O atra vez de este formulario
   </h2>
   <h3 className="text-center font-nunito pb-1 text-slate-800">este formulario no funciona aun.</h3>
   <form className="lg:w-[400px] w-full space-y-8   mx-auto mb-40 ">
    <Input label="nombre" size="lg" color="teal" />
    <Input label="correo" size="lg" color="teal" type="email" />
    <Textarea label="mensaje" size="lg" color="teal" />
    <Button variant="gradient" title="enviar formulario" color="teal" fullWidth>
     enviar
    </Button>
   </form>
  </ThemeProvider>
 );
};

export default Form;
