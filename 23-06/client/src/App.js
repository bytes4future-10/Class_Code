import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState("")

  useEffect(() => {
    getNome()
  }, [])

  async function getNome(){
    const res = await fetch("http://localhost:3030/nome", {
      method: "GET",
    })

    const json = await res.json()

    setNome(json.nome)
  }

  return (
    <div className="App">
      <div>{`NOME: ${nome}`}</div>
    </div>
  );
}

export default App;
