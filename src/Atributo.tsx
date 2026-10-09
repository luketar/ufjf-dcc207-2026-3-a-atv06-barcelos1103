import { useState } from "react";
import "./Atributo.css"

type AtributoProps = {
    icone: String;
};

export default function Atributo({icone} : AtributoProps){
    const [valor, setValor] = useState<number>(0)
    let coracoes = "";
    for (let i=0; i < 5; i++){

        if(i<valor){
            coracoes += icone

        }
        else{
            coracoes += icone
        }
    }
    return (
    <div className="atributo">
        {valor} {coracoes}
        <button onClick={()=>{
            if (valor === 5) {
                setValor(0);
            }
            else {
                setValor(valor + 1);
            }


        }} >+</button>
    </div>) 

}