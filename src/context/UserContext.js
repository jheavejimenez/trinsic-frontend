import {createContext} from "react";


export const UserContext = createContext({
    user: {
        id: null,
        email: ''
    },
    setUser: (user) => {}
});
