"use client"
import { useState } from "react";

// export default function Home() {
//   const [state, setState] = useState("OLA")
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       PAI: {state}
//       <Filho state={state} change={(e:string) => setState(e)}/>
//     </div>
//   );
// }

// function Filho({state, change}: {state: string, change:any}){

//   const handleChange = () => {
//     change("MUNDO")
//   }

//   return(
//     <div>
//       FILHO: {state}
//       <button onClick={() => handleChange()}>BUTTON</button>
//     </div>
//   )
// }


// export default function Home() {

//   const [numero, setNumero] = useState(0)
  
//   return (
//     <div>
//       <p>{numero}</p>
//       <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
//     </div>
//   );
// }


    // Um título: "Gerador de Números"
    // Um botão com o conteúdo "Gerar"
    // Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"

// export default function Home() {

//   const [numero, setNumero] = useState<string | number>("Clique em Gerar")

//   return (
//     <div>
//       <h1>Gerador de Números</h1>
//       <button onClick={() => setNumero(Math.round(Math.random() * 1000))}>Gerar</button>
//       <p>{numero}</p>
//     </div>
//   );
// }



    // Um título: "Gerador de Nomes"
    // Um botão com o conteúdo "Gerar"
    // Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"


export default function Home() {

  const nomes = ["Rafael", "Diogo", "Alina", "Andre", "Pedro", "Iara", "Marta", "Maria"]
  const adjetivos = ["Grande", "Lindo", "Poderoso", "Cheiroso", "Glorioso", "Conquistador"]

  const [nome, setNome] = useState("")
  const [adjetivo, setAdjetivo] = useState("")

  function handleClick(){
      setNome(nomes[Math.floor(Math.random() * nomes.length)])
      setAdjetivo(adjetivos[Math.floor(Math.random() * adjetivos.length)])
      return
  }

  return (
    <div>
      <h1>Gerador de Números</h1>
      <button onClick={() => handleClick()}>Gerar</button>
      <p>{nome.length === 0 || adjetivo.length === 0 ? "Click em Gerar" : `${nome} ${adjetivo}`}</p>
    </div>
  );
}
