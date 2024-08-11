import { createContext, ReactNode, useState } from "react";
import { skill, usuario } from "../../service/SistimaSkill/Sistemaskill";

type SistemaContexteProps={
    children:ReactNode;
};
type SistemaContextType={
    nivelSkill:string;
    setNivelSkill:(novoEstado:string)=>void;
    usuario:usuario;
    setUsuario:(novoEstado:usuario)=>void;
    skillsUsuario:skill[];
    setSkillsUsuario:(novoEstado:skill[])=>void;
    skillsAdicionar:skill[];
    setSkillsAdicionar:(novoEstado:skill[])=>void;
    autenticated:boolean;
    setAutenticated:(novoEstado:boolean)=>void;
    token:string;
    setToken:(novoEstado:string)=>void;
}
const valorInicial={
    nivelSkill:"",
    setNivelSkill:()=>"",
    usuario:{id:0,nome:"",login:"",senha:"",url:"",skills:[]},
    setUsuario:(user:usuario)=>{},
    skillsUsuario:[],
    setSkillsUsuario:(skills:skill[])=>[],
    skillsAdicionar:[],
    setSkillsAdicionar:()=>{},
    autenticated:false,
    setAutenticated:()=>{},
    token:"",
    setToken:(token:string)=>{}
}
export const SistemaContext = createContext <SistemaContextType>(valorInicial);

/**
 *  id:number
    nome:string
    login:string
    senha:string
    url:string
    skills:skill[]
 */
function SistemaProvider({children}:SistemaContexteProps){
    const [nivelSkill,setNivelSkill]= useState<string>(valorInicial.nivelSkill);
    const [usuario,setUsuario]=useState<usuario>(valorInicial.usuario);
    const [skillsUsuario, setSkillsUsuario] = useState<skill[]>(valorInicial.skillsUsuario);
    const [skillsAdicionar,setSkillsAdicionar]=useState<skill[]>([]);
    const [autenticated,setAutenticated] =useState<boolean>(valorInicial.autenticated);
    const [token,setToken]=useState<string>("");
    return(
        <SistemaContext.Provider value={{nivelSkill, setNivelSkill, usuario, setUsuario, skillsUsuario, setSkillsUsuario, skillsAdicionar, setSkillsAdicionar, autenticated, setAutenticated,token,setToken}}>
        {children}          
    </SistemaContext.Provider>
    )
}
export default SistemaProvider;