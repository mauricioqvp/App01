import { createContext } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const t1 = [{
        id: 1,
        nome: 'Carlos'
    },{
        id:2,
        nome: 'Paula'
    },
    {
        id:3,
        nome: 'José'
    },
    {
        id:4,
        nome: 'Aristóteles'
    }];

    return(
        <UserContext.Provider value={{ t1 }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;