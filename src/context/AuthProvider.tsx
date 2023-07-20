import { ReactNode, createContext, useEffect, useState } from "react";


type AuthProviderProps = {
    children: ReactNode;
}

type UserInfo ={
    username: boolean,
    quantity: string,
}

const InitialUser ={
    username: false,
    quantity: '',
}

type AuthProviderContext ={
    auth: UserInfo
    updateUserInfo: (userinfo: UserInfo) =>void
}

export const AuthProviderContext = createContext({} as AuthProviderContext)


export function AuthProvider({children}:AuthProviderProps){

    const [auth, setAuth] = useState<UserInfo>(InitialUser);

    useEffect(()=>{
        if(localStorage.getItem("userstates") === 'fasle'|| undefined){
            localStorage.setItem("userstates", JSON.stringify(false));
        }else if(localStorage.getItem("userstates") === 'true'){
            localStorage.setItem("userstates", JSON.stringify(true));
            //updateUserInfo({username:true, quantity:'abc'});
        }
    },[])
    
      

    /* it is for refash the page. When the user refash the page.
       it will check the local localStorage userstates's value is true or not.
       then, set the auth value again.
       if(true), user still can visit the protect page. not true.
       will back to login page
    */
 
    const updateUserInfo=(userinfo:UserInfo)=>{
        setAuth(userinfo);
    }

    return(
        <AuthProviderContext.Provider 
        value={{auth,updateUserInfo }}>
            {children}
        </AuthProviderContext.Provider>
    )
     

}