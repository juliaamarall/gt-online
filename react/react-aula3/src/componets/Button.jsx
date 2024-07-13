import { useState } from "react";

const Button = () => {
  
    const [contador, setContador] = useState(0);
        
    return (  
        <button onClick={() => setContador(contador + 1)}>Clique Me {contador}</button>
    );
}
 
export default Button;