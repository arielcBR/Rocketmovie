import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn ({email, password}){

        try {
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            api.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setData({ user, data });
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }
            alert("Não foi possível entrar");
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketmovies:token"); 
        localStorage.removeItem("@rocketmovies:user"); 
        setData({});

    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token"); 
        const user = localStorage.getItem("@rocketmovies:user"); 

        if (token && user) {
            api.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setData({
                user: JSON.parse(user),
                token
            });
        }
    },[])

    return (
        <AuthContext.Provider value={{
            signOut,
            signIn,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }