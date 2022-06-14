import React, { useContext } from "react";
import { UserContext } from "../../../contexts/user";

function Alunos(){
    const { t1 } = useContext(UserContext);
    
    return(
        <div>
            {t1.map((t)=>{
                return(
                    <p key={t.id}>
                        {t.nome}
                    </p>
                  )  
            })}
        </div>
    );
}

export default Alunos;