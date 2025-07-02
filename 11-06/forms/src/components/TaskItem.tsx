export function TaskItem({ concluido, texto, alternaConcluido }: {concluido: boolean, texto: string, alternaConcluido: () => void}) {
    return (
        <div onClick={alternaConcluido} style={{textDecoration: concluido ? "line-through" : "none"}}>
            {texto}
        </div>
    )
}