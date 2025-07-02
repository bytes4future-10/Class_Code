"use client"

import { ChangeEvent, FormEvent, useState } from "react"

// Fazer um form que tenha 2 campos, email, pass

export default function Form(){

    const [form, setForm] = useState<{email: string, pass: string}>({email: "", pass: ""})

    const handleChange = (evento: ChangeEvent<HTMLInputElement>,tag: string) => {
        switch(tag){
            case "email": setForm({...form, email: evento.target.value}); break
            case "pass": setForm({...form, pass: evento.target.value}); break
        }

    }

    const handleSubmit = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        console.log(form)
    }

    return(
        <form onSubmit={(evento) => {handleSubmit(evento)}}>
            
            {/* INPUT DE EMAIL */}
            <label>EMAIL: </label>
            <input type={"text"} onChange={(evento) => {handleChange(evento,"email")}} value={form.email}></input>
             
            {/* INPUT DE PASS */}
            <label>PASS: </label>
            <input type={"password"} onChange={(evento) => {handleChange(evento, "pass")}} value={form.pass}></input>

            {/* SUBMIT */}
            <button type={"submit"}>SUBMIT</button>
        </form>
    )
}