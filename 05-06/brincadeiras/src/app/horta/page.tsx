import Batata from "@/components/Batata";
import Tomate from "@/components/Tomate";

export default function Pagina(){
    return(
        <div className="flex flex-col">
            <Tomate/>
            <Batata/>
        </div>
    )
}