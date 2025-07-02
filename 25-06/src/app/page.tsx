"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [nome, setNome] = useState({nome: ""})

  useEffect(()=>{
    getNome()
  }, [])

  async function getNome(){
    const res = await fetch("/api", {
      method: "GET"
    })

    const json = await res.json()
    console.log(json)

    setNome(json)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {nome.nome}
    </div>
  );
}
