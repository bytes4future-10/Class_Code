/*
inteface Props {
    title: {string},
    desc: string

    function Bloco({title, desc}: Props) {}
}
*/ 

export function Bloco({title, desc}: {title: string, desc: string}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}