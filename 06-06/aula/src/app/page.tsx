import { Bloco } from "@/components/Bloco";
import Image from "next/image";
import { title } from "process";

const example: {title: string, desc: string}[] = [
  {title: "Batata", desc: "sei la"}, 
  {title: "Tomate", desc:"la sei"}, 
  {title: "Cebola", desc: "Shrek"}
]


interface User {
  email: string,
  password: string
}

const users: Array<User> = [
  {
    email: "test@gmail.com",
    password: "123"
  },
  {
    email: "admin@gmail.com",
    password: "adminadmin"
  }
]

export default function Home() {
  return (
    <div>
      {example.map((elemento, index) => <Bloco key={index} title={elemento.title} desc={elemento.desc}></Bloco>)}
    </div>
  );
}
