import MaterialTailwind from "@material-tailwind/react/index.js";
const { ThemeProvider } = MaterialTailwind;
const Provider = ({ children }) => {
 return <ThemeProvider>{children} </ThemeProvider>;
};

export default Provider;
